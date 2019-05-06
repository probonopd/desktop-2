const product = require('./product');
const sum = require('./sum');

const mixedOperations = (a, b) => {
  return product(sum(product(a, b), sum(a, a)), sum(b, b));
};

test('product and sum work together', () => {
  expect(mixedOperations(2, 3)).toBe(60);
});
