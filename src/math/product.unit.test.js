const product = require('./product');

test('multiplies 6 * 9 to equal 54', () => {
  expect(product(6, 9)).toBe(54);
});
