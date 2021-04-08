const range = (start, end) => {
  const result = [];

  for (let i = start; i <= end; i++) result.push(i);

  return result;
};

const cardNetworks = [
  "chinaUnionPay",
  "switch",
  "maestro",
  "discover",
  "masterCard",
  "dinersClub",
  "visa",
  "americanExpress",
];

const cardParameters = {
  chinaUnionPay: {
    name: "China UnionPay",
    prefixes: [
      ...range(624, 626),
      ...range(6282, 6288),
      ...range(622126, 622925),
    ],
    lengths: [...range(16, 19)],
  },
  switch: {
    name: "Switch",
    prefixes: [4903, 4905, 4911, 4936, 6333, 6759, 564182, 633110],
    lengths: [16, 18, 19],
  },
  maestro: {
    name: "Maestro",
    prefixes: [5018, 5020, 5038, 6304],
    lengths: [...range(12, 19)],
  },
  discover: {
    name: "Discover",
    prefixes: [65, ...range(644, 649), 6011],
    lengths: [16, 19],
  },
  masterCard: {
    name: "MasterCard",
    prefixes: [...range(51, 55)],
    lengths: [16],
  },
  dinersClub: {
    name: "Diner's Club",
    prefixes: [38, 39],
    lengths: [14],
  },
  visa: {
    name: "Visa",
    prefixes: [4],
    lengths: [13, 16, 19],
  },
  americanExpress: {
    name: "American Express",
    prefixes: [34, 37],
    lengths: [15],
  },
};

const isValidCardNumber = (network, cardNumber) => {
  const isValidLength = cardParameters[network].lengths.includes(
    cardNumber.length
  );
  const isValidPrefix = cardParameters[network].prefixes.some((prefix) =>
    cardNumber.startsWith(prefix)
  );

  return isValidLength && isValidPrefix;
};

var detectNetwork = (cardNumber) => {
  for (const network of cardNetworks) {
    if (isValidCardNumber(network, cardNumber))
      return cardParameters[network].name;
  }
};
