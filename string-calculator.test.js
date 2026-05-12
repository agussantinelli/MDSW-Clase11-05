const sumar = require('./string-calculator');

// test 1
test('string vacío retorna 0', () => {
  expect(sumar('')).toBe(0);
});

// test 2
test('un número retorna ese número', () => {
  expect(sumar('1')).toBe(1);
});

// test 3
test('dos números retornan su suma', () => {
  expect(sumar('1,2')).toBe(3);
});

// test 4
test('acepta salto de línea como separador', () => {
  expect(sumar('4\n2')).toBe(6);
});