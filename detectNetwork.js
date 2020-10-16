// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

// Input: string (credit card number)
// Output: string (credit card network name)
// Constraints: none
// Edge Cases: What if card number does not represent networks below?

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  cardNumberLength = cardNumber.length;
  cardNumberPrefix = cardNumber.slice(0, 2);
  if (cardNumber.length === 14 && (cardNumberPrefix === '38' || cardNumberPrefix === '39')) {
    return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (cardNumberPrefix === '34' || cardNumberPrefix === '37')) {
    return 'American Express';
  } else if (cardNumber.length === 16 && (cardNumberPrefix === '51' || cardNumberPrefix === '52' || cardNumberPrefix === '53' || cardNumberPrefix === '54' || cardNumberPrefix === '55')) {
    return 'MasterCard';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumberPrefix[0] === '4') {
    return 'Visa';
  }
};
