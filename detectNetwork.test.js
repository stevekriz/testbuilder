const should = chai.should();
const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
const generateCardNumber = (prefix, length) => {
  let cardNumber = prefix.toString();
  while (cardNumber.length < length) {
    cardNumber += getRandomInt(0, 10);
  }
  return cardNumber;
};
for (const network of cardNetworks) {
  describe(cardParameters[network].name, () => {
    cardParameters[network].prefixes.forEach(prefix => {
      cardParameters[network].lengths.forEach(length => {
        it('has a prefix of ' + prefix + ' and a length of ' + length, function() {
          detectNetwork(generateCardNumber(prefix, length)).should.equal(cardParameters[network].name);
        });
      });
    });
  });
}