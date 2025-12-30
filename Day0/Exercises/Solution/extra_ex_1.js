const numbers = [
  3, 11, 23, 47, 8, 12, 23, 47, 53, 7,
  15, 29, 31, 31, 42, 67, 89, 97, 100, 53,
  11, 4, 18, 37, 41, 41, 59, 63, 72, 83,
  29, 97, 6, 50, 21, 80, 90, 64, 33, 27,
  2, 5, 9, 10, 14, 16, 22, 25, 44, 48,
  55, 56, 60, 62, 66, 68, 70, 74, 75, 76,
  77, 78, 81, 84, 85, 86, 87, 88, 91, 92,
  93, 94, 95, 96, 98, 99, 102, 104, 105, 47
];

function filterForJohnny(numbers) {
  // Helper function to check if a number is prime
  function isPrime(num) {
    if (num < 2) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;
    
    for (let i = 3; i <= Math.sqrt(num); i += 2) {
      if (num % i === 0) return false;
    }
    return true;
  }

  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const num = numbers[i];
    
    // Check if prime, greater than 10, and not already in result
    if (isPrime(num) && num > 10 && !result.includes(num)) {
      result.push(num);
    }
  }

  return result;
}

console.log(filterForJohnny(numbers));
// Output: [11, 23, 47, 53, 29, 31, 67, 89, 97, 37, 41, 59, 83]