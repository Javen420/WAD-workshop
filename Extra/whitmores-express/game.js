// ============ GAME CONFIGURATION ============

const GAME_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds
const FEEDBACK_DURATION = 1500; // How long to show feedback

const menu = {
    burger: { name: "Burger", emoji: "🍔", price: 10, prepTime: 3 },
    fries: { name: "Fries", emoji: "🍟", price: 5, prepTime: 2 },
    drink: { name: "Drink", emoji: "🥤", price: 3, prepTime: 1 },
    hotdog: { name: "Hot Dog", emoji: "🌭", price: 7, prepTime: 2 },
    pizza: { name: "Pizza", emoji: "🍕", price: 12, prepTime: 4 },
    icecream: { name: "Ice Cream", emoji: "🍦", price: 4, prepTime: 1 }
};

const sizeMultipliers = {
    small: 0.8,
    medium: 1,
    large: 1.3
};

const customerMoods = ["😊", "😄", "🙂", "😃", "😁"];

// ============ DIFFICULTY CHECK ============

function isDifficulty2Enabled() {
    return typeof DIFFICULTY_2 !== "undefined" && DIFFICULTY_2 === true;
}

// ============ GAME STATE ============

let score = 0;
let ordersCompleted = 0;
let ordersAttempted = 0;
let timeRemaining = GAME_DURATION;
let currentOrder = null;
let gameInterval = null;
let gameRunning = false;

// ============ DOM ELEMENTS ============

const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const gameoverScreen = document.getElementById("gameover-screen");

const scoreDisplay = document.getElementById("score");
const ordersDisplay = document.getElementById("orders-completed");
const timerDisplay = document.getElementById("timer");

const customerAvatar = document.getElementById("customer-avatar");
const orderItems = document.getElementById("order-items");
const orderSize = document.getElementById("order-size");
const orderCombo = document.getElementById("order-combo");
const orderSpecial = document.getElementById("order-special");

const prepItems = document.getElementById("prep-items");
const prepEmojis = document.getElementById("prep-emojis");
const prepPrice = document.getElementById("prep-price");
const prepDiscount = document.getElementById("prep-discount");
const prepDiscountRow = document.getElementById("prep-discount-row");
const prepSpecial = document.getElementById("prep-special");
const prepSpecialRow = document.getElementById("prep-special-row");
const prepTime = document.getElementById("prep-time");
const prepTimeRow = document.getElementById("prep-time-row");
const prepErrors = document.getElementById("prep-errors");
const prepErrorsRow = document.getElementById("prep-errors-row");

const feedback = document.getElementById("feedback");
const feedbackIcon = document.getElementById("feedback-icon");
const feedbackMessage = document.getElementById("feedback-message");

const finalScore = document.getElementById("final-score");
const finalOrders = document.getElementById("final-orders");
const finalAccuracy = document.getElementById("final-accuracy");
const ratingMessage = document.getElementById("rating-message");

const startBtn = document.getElementById("start-btn");
const serveBtn = document.getElementById("serve-btn");
const restartBtn = document.getElementById("restart-btn");

// ============ HELPER FUNCTIONS ============

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function formatTime(ms) {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return minutes + ":" + seconds.toString().padStart(2, "0");
}

function roundToTwo(num) {
    return Math.round(num * 100) / 100;
}

// ============ ORDER GENERATION ============

function generateOrder() {
    const itemKeys = Object.keys(menu);
    const numItems = getRandomInt(1, isDifficulty2Enabled() ? 6 : 3);
    const items = [];

    for (let i = 0; i < numItems; i++) {
        if (isDifficulty2Enabled() && Math.random() > 0.85) {
            items.push("invalidItem");
        } else {
            items.push(getRandomItem(itemKeys));
        }
    }

    const sizes = ["small", "medium", "medium", "medium", "large"];
    const size = getRandomItem(sizes);

    const isCombo = items.length >= 2 && Math.random() > 0.5;

    const specials = [null, null, null, "no onions", "extra cheese", "no pickles", "extra sauce"];
    const special = getRandomItem(specials);

    const order = {
        items: items,
        isCombo: isCombo,
        size: size,
        special: special
    };

    if (isDifficulty2Enabled()) {
        order.isPeakHour = Math.random() > 0.6;
        order.isLoyaltyMember = Math.random() > 0.7;
    }

    return order;
}

function getExpectedResult(order) {
    let emojis = "";
    let totalPrice = 0;
    let totalPrepTime = 0;
    const errors = [];
    const validItems = [];

    for (let i = 0; i < order.items.length; i++) {
        const itemId = order.items[i];
        const itemData = menu[itemId];

        if (isDifficulty2Enabled()) {
            if (!itemData) {
                errors.push(itemId + " not found in menu");
                continue;
            }

            if (validItems.length >= 5) {
                if (errors.indexOf("Maximum 5 items per order") === -1) {
                    errors.push("Maximum 5 items per order");
                }
                continue;
            }
        }

        if (!itemData) {
            continue;
        }

        validItems.push(itemId);
        emojis = emojis + itemData.emoji;
        totalPrice = totalPrice + itemData.price;

        if (isDifficulty2Enabled()) {
            totalPrepTime = totalPrepTime + itemData.prepTime;
        }
    }

    if (isDifficulty2Enabled() && order.isPeakHour) {
        totalPrice = totalPrice * 1.2;
    }

    const multiplier = sizeMultipliers[order.size];
    totalPrice = totalPrice * multiplier;

    const result = {
        items: validItems,
        emojis: emojis,
        totalPrice: totalPrice
    };

    let totalDiscount = 0;

    if (order.isCombo) {
        const comboDiscount = totalPrice * 0.1;
        totalPrice = totalPrice - comboDiscount;
        totalDiscount = totalDiscount + comboDiscount;
    }

    if (isDifficulty2Enabled() && order.isLoyaltyMember) {
        const loyaltyDiscount = totalPrice * 0.05;
        totalPrice = totalPrice - loyaltyDiscount;
        totalDiscount = totalDiscount + loyaltyDiscount;
    }

    if (totalDiscount > 0) {
        result.discount = roundToTwo(totalDiscount);
    }

    result.totalPrice = roundToTwo(totalPrice);

    if (order.size !== "medium") {
        result.size = order.size;
    }

    if (order.special !== null) {
        result.special = order.special;
    }

    if (isDifficulty2Enabled()) {
        result.prepTime = totalPrepTime;

        if (errors.length > 0) {
            result.errors = errors;
        }
    }

    return result;
}

function getOrderEmojis(order) {
    let emojis = "";
    for (let i = 0; i < order.items.length; i++) {
        const itemData = menu[order.items[i]];
        if (itemData) {
            emojis = emojis + itemData.emoji;
        } else {
            emojis = emojis + "❓";
        }
    }
    return emojis;
}

// ============ DISPLAY FUNCTIONS ============

function displayOrder(order) {
    customerAvatar.textContent = getRandomItem(customerMoods);
    orderItems.textContent = getOrderEmojis(order);

    orderSize.textContent = order.size.charAt(0).toUpperCase() + order.size.slice(1);
    if (order.size === "medium") {
        orderSize.classList.remove("highlight");
    } else {
        orderSize.classList.add("highlight");
    }

    if (order.isCombo) {
        orderCombo.classList.remove("hidden");
        orderCombo.classList.add("highlight");
    } else {
        orderCombo.classList.add("hidden");
    }

    if (order.special) {
        orderSpecial.textContent = order.special;
        orderSpecial.classList.remove("hidden");
        orderSpecial.classList.add("highlight");
    } else {
        orderSpecial.classList.add("hidden");
    }

    if (isDifficulty2Enabled()) {
        const peakTag = document.getElementById("order-peak");
        if (peakTag) {
            if (order.isPeakHour) {
                peakTag.classList.remove("hidden");
                peakTag.classList.add("highlight");
            } else {
                peakTag.classList.add("hidden");
            }
        }

        const loyaltyTag = document.getElementById("order-loyalty");
        if (loyaltyTag) {
            if (order.isLoyaltyMember) {
                loyaltyTag.classList.remove("hidden");
                loyaltyTag.classList.add("highlight");
            } else {
                loyaltyTag.classList.add("hidden");
            }
        }
    }
}

function displayPreparation(result) {
    if (!result || typeof result !== "object") {
        prepItems.textContent = "Error: Invalid result";
        prepEmojis.textContent = "-";
        prepPrice.textContent = "-";
        prepDiscountRow.classList.add("hidden");
        prepSpecialRow.classList.add("hidden");
        if (prepTimeRow) prepTimeRow.classList.add("hidden");
        if (prepErrorsRow) prepErrorsRow.classList.add("hidden");
        return;
    }

    prepItems.textContent = result.items ? result.items.join(", ") : "-";
    prepEmojis.textContent = result.emojis || "-";
    prepPrice.textContent = result.totalPrice !== undefined ? "$" + result.totalPrice : "-";

    if (result.discount !== undefined) {
        prepDiscount.textContent = "-$" + result.discount;
        prepDiscountRow.classList.remove("hidden");
    } else {
        prepDiscountRow.classList.add("hidden");
    }

    if (result.special) {
        prepSpecial.textContent = result.special;
        prepSpecialRow.classList.remove("hidden");
    } else {
        prepSpecialRow.classList.add("hidden");
    }

    if (isDifficulty2Enabled()) {
        if (prepTimeRow && prepTime) {
            if (result.prepTime !== undefined) {
                prepTime.textContent = result.prepTime + "s";
                prepTimeRow.classList.remove("hidden");
            } else {
                prepTimeRow.classList.add("hidden");
            }
        }

        if (prepErrorsRow && prepErrors) {
            if (result.errors && result.errors.length > 0) {
                prepErrors.textContent = result.errors.join(", ");
                prepErrorsRow.classList.remove("hidden");
            } else {
                prepErrorsRow.classList.add("hidden");
            }
        }
    }
}

function clearPreparation() {
    prepItems.textContent = "-";
    prepEmojis.textContent = "-";
    prepPrice.textContent = "-";
    prepDiscountRow.classList.add("hidden");
    prepSpecialRow.classList.add("hidden");
    if (prepTimeRow) prepTimeRow.classList.add("hidden");
    if (prepErrorsRow) prepErrorsRow.classList.add("hidden");
}

function updateStats() {
    scoreDisplay.textContent = "$" + score;
    ordersDisplay.textContent = ordersCompleted;
    timerDisplay.textContent = formatTime(timeRemaining);
}

function showFeedback(success, message) {
    feedbackIcon.textContent = success ? "✓" : "✗";
    feedbackIcon.className = "feedback-icon " + (success ? "success" : "error");
    feedbackMessage.textContent = message;
    feedbackMessage.className = "feedback-message " + (success ? "success" : "error");
    feedback.classList.remove("hidden");

    setTimeout(function() {
        feedback.classList.add("hidden");
    }, FEEDBACK_DURATION);
}

// ============ GAME LOGIC ============

function checkOrder(playerResult, expectedResult) {
    if (!playerResult || typeof playerResult !== "object") {
        return false;
    }

    if (playerResult.emojis !== expectedResult.emojis) {
        return false;
    }

    if (Math.abs(playerResult.totalPrice - expectedResult.totalPrice) > 0.01) {
        return false;
    }

    if (expectedResult.discount !== undefined) {
        if (playerResult.discount === undefined) {
            return false;
        }
        if (Math.abs(playerResult.discount - expectedResult.discount) > 0.01) {
            return false;
        }
    }

    if (expectedResult.size !== undefined) {
        if (playerResult.size !== expectedResult.size) {
            return false;
        }
    }

    if (expectedResult.special !== undefined) {
        if (playerResult.special !== expectedResult.special) {
            return false;
        }
    }

    if (isDifficulty2Enabled()) {
        if (expectedResult.prepTime !== undefined) {
            if (playerResult.prepTime !== expectedResult.prepTime) {
                return false;
            }
        }

        if (expectedResult.errors !== undefined) {
            if (!playerResult.errors || playerResult.errors.length !== expectedResult.errors.length) {
                return false;
            }
        }
    }

    return true;
}

function serveOrder() {
    if (!gameRunning || !currentOrder) return;

    ordersAttempted++;

    let playerResult;
    try {
        playerResult = prepareOrder(currentOrder);
    } catch (error) {
        showFeedback(false, "Error in your function!");
        console.error("prepareOrder error:", error);
        nextCustomer();
        return;
    }

    displayPreparation(playerResult);

    const expectedResult = getExpectedResult(currentOrder);
    const isCorrect = checkOrder(playerResult, expectedResult);

    setTimeout(function() {
        if (isCorrect) {
            score = score + Math.round(expectedResult.totalPrice);
            ordersCompleted++;
            showFeedback(true, "+$" + Math.round(expectedResult.totalPrice));
        } else {
            showFeedback(false, "Wrong order!");
            console.log("Expected:", expectedResult);
            console.log("Got:", playerResult);
        }

        updateStats();

        setTimeout(function() {
            nextCustomer();
        }, FEEDBACK_DURATION);
    }, 500);
}

function nextCustomer() {
    currentOrder = generateOrder();
    displayOrder(currentOrder);
    clearPreparation();
}

function startGame() {
    score = 0;
    ordersCompleted = 0;
    ordersAttempted = 0;
    timeRemaining = GAME_DURATION;
    gameRunning = true;

    updateStats();

    startScreen.classList.add("hidden");
    gameoverScreen.classList.add("hidden");
    gameScreen.classList.remove("hidden");

    nextCustomer();

    gameInterval = setInterval(function() {
        timeRemaining = timeRemaining - 1000;
        updateStats();

        if (timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

function endGame() {
    gameRunning = false;
    clearInterval(gameInterval);

    const accuracy = ordersAttempted > 0 ? Math.round((ordersCompleted / ordersAttempted) * 100) : 0;

    finalScore.textContent = "$" + score;
    finalOrders.textContent = ordersCompleted;
    finalAccuracy.textContent = accuracy + "%";

    if (ordersCompleted >= 30) {
        ratingMessage.textContent = "Exceptional! You're a natural! Ready to run your own restaurant!";
    } else if (ordersCompleted >= 20) {
        ratingMessage.textContent = "Outstanding work! The lunch rush was no match for you!";
    } else if (ordersCompleted >= 15) {
        ratingMessage.textContent = "Great job! You handled the rush like a pro!";
    } else if (ordersCompleted >= 10) {
        ratingMessage.textContent = "Good effort! Keep practicing and you'll be even faster!";
    } else if (ordersCompleted >= 5) {
        ratingMessage.textContent = "Not bad for your first day! There's room to improve.";
    } else {
        ratingMessage.textContent = "The kitchen can be tough. Review your code and try again!";
    }

    gameScreen.classList.add("hidden");
    gameoverScreen.classList.remove("hidden");
}

// ============ EVENT LISTENERS ============

startBtn.addEventListener("click", startGame);
serveBtn.addEventListener("click", serveOrder);
restartBtn.addEventListener("click", startGame);

document.addEventListener("keydown", function(e) {
    if (e.key === "Enter" && gameRunning) {
        serveOrder();
    }
});

// ============ INITIALIZATION ============

if (typeof prepareOrder !== "function") {
    console.error("prepareOrder function not found! Make sure solution.js is loaded correctly.");
    alert("Error: prepareOrder function not found!\n\nMake sure you have created the prepareOrder function in solution.js");
}