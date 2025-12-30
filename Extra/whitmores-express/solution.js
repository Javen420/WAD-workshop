const DIFFICULTY_2 = true;

function prepareOrder(order) {
    // Menu data
    const menu = {
        burger: { name: "Burger", emoji: "🍔", price: 10, prepTime: 3 },
        fries: { name: "Fries", emoji: "🍟", price: 5, prepTime: 2 },
        drink: { name: "Drink", emoji: "🥤", price: 3, prepTime: 1 },
        hotdog: { name: "Hot Dog", emoji: "🌭", price: 7, prepTime: 2 },
        pizza: { name: "Pizza", emoji: "🍕", price: 12, prepTime: 4 },
        icecream: { name: "Ice Cream", emoji: "🍦", price: 4, prepTime: 1 }
    };

    // Size multipliers
    const sizeMultipliers = {
        small: 0.8,
        medium: 1,
        large: 1.3
    };

    // Variables
    let emojis = "";
    let totalPrice = 0;
    let prepTime = 0;
    const errors = [];
    const validItems = [];

    // Loop through items
    for (let i = 0; i < order.items.length; i++) {
        const itemId = order.items[i];
        const itemData = menu[itemId];

        // Difficulty 2: Check for invalid items
        if (DIFFICULTY_2) {
            if (!itemData) {
                errors.push(itemId + " not found in menu");
                continue;
            }

            // Difficulty 2: Max 5 items
            if (validItems.length >= 5) {
                if (!errors.includes("Maximum 5 items per order")) {
                    errors.push("Maximum 5 items per order");
                }
                continue;
            }
        }

        validItems.push(itemId);
        emojis = emojis + itemData.emoji;
        totalPrice = totalPrice + itemData.price;

        if (DIFFICULTY_2) {
            prepTime = prepTime + itemData.prepTime;
        }
    }

    // Difficulty 2: Apply peak hour pricing
    if (DIFFICULTY_2 && order.isPeakHour) {
        totalPrice = totalPrice * 1.2;
    }

    // Apply size multiplier
    const multiplier = sizeMultipliers[order.size];
    totalPrice = totalPrice * multiplier;

    // Create result object
    const result = {
        items: validItems,
        emojis: emojis,
        totalPrice: totalPrice
    };

    let totalDiscount = 0;

    // Apply combo discount
    if (order.isCombo) {
        const comboDiscount = totalPrice * 0.1;
        totalPrice = totalPrice - comboDiscount;
        totalDiscount = totalDiscount + comboDiscount;
    }

    // Difficulty 2: Apply loyalty discount
    if (DIFFICULTY_2 && order.isLoyaltyMember) {
        const loyaltyDiscount = totalPrice * 0.05;
        totalPrice = totalPrice - loyaltyDiscount;
        totalDiscount = totalDiscount + loyaltyDiscount;
    }

    // Add discount to result if applicable
    if (totalDiscount > 0) {
        result.discount = Math.round(totalDiscount * 100) / 100;
    }

    // Update totalPrice in result
    result.totalPrice = Math.round(totalPrice * 100) / 100;

    // Add size if not medium
    if (order.size !== "medium") {
        result.size = order.size;
    }

    // Add special if present
    if (order.special !== null) {
        result.special = order.special;
    }

    // Difficulty 2: Add prep time and errors
    if (DIFFICULTY_2) {
        result.prepTime = prepTime;

        if (errors.length > 0) {
            result.errors = errors;
        }
    }

    return result;
}