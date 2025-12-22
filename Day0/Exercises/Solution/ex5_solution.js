//Exercise 5 (Movie Night)
// Arrays
const friends = ["Sam", "Rick", "Jordan"];
const movies = ["Avengers Infinity War", "F1 Movie", "John Wick 4"];
const movieTimes = [1800, 1900, 2000];

// Boolean
const allSnacksBought = false;

// Print initial state
console.log("=== MOVIE NIGHT PLANNER ===");
console.log("Friends attending: " + friends);
console.log("Number of friends: " + friends.length);
console.log("Movie options: " + movies);
console.log("Movie Times: " + movieTimes);
console.log("All snacks bought: " + allSnacksBought);
console.log("===========================");

// Changes
friends.push("Taylor");
movies.pop();
movies.push("Oppenheimer");
const secondMovieTime = movieTimes[1];

// Print updated state
console.log("=== MOVIE NIGHT PLANNER ===");
console.log("Friends attending: " + friends);
console.log("Number of friends: " + friends.length);
console.log("Movie options: " + movies);
console.log("Movie Times: " + movieTimes);
console.log("All snacks bought: " + allSnacksBought);
console.log("---------------------------");
console.log("Second Movie Time: " + secondMovieTime);
console.log("===========================");