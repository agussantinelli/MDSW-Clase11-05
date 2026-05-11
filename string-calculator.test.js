const sumar = require('./string-calculator');

// test 1
test('string vacío retorna 0', () => {
  expect(sumar('')).toBe(0);
});
