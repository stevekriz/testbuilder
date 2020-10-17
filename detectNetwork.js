var detectNetwork = function(cardNumber) {
  cardNumberLength = cardNumber.length;
  if ((cardNumber.length >= 16 && cardNumber.length <= 19) && ((cardNumber.slice(0, 3) >= 624 && cardNumber.slice(0, 3) <= 626) || (cardNumber.slice(0, 4) >= 6282 && cardNumber.slice(0, 4) <= 6288) || (cardNumber.slice(0, 6) >= 622126 && cardNumber.slice(0, 6) <= 622925))) {
    return 'China UnionPay';
  } else if ((cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19) && (cardNumber.startsWith('4903') || cardNumber.startsWith('4905') || cardNumber.startsWith('4911') || cardNumber.startsWith('4936') || cardNumber.startsWith('6333') || cardNumber.startsWith('6759') || cardNumber.startsWith('564182') || cardNumber.startsWith('633110'))) {
    return 'Switch';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (cardNumber.startsWith('5018') || cardNumber.startsWith('5020') || cardNumber.startsWith('5038') || cardNumber.startsWith('6304'))) {
    return 'Maestro';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (cardNumber.startsWith('65') || (cardNumber.slice(0, 3) >= 644 && cardNumber.slice(0, 3) <= 649) || (cardNumber.startsWith('6011')))) {
    return 'Discover';
  } else if (cardNumber.length === 16 && (cardNumber.slice(0, 2) >= 51 && cardNumber.slice(0, 2) <= 55)) {
    return 'MasterCard';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && cardNumber.startsWith('4')) {
    return 'Visa';
  } else if (cardNumber.length === 14 && (cardNumber.startsWith('38') || cardNumber.startsWith('39'))) {
    return 'Diner\'s Club';
  } else if (cardNumber.length === 15 && (cardNumber.startsWith('34') || cardNumber.startsWith('37'))) {
    return 'American Express';
  }
};
