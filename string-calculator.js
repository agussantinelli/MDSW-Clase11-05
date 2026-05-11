function sumar(string) {
  // test 1: string vacío retorna 0
  if (string === '') return 0;

  // test 2: un número retorna ese número
  return parseInt(string);
}

module.exports = sumar;
