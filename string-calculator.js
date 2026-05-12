function sumar(string) {
  if (string === '') return 0;

  const numeros = string.split(/,|\n/);
  let suma = 0;
  for (let num of numeros) {
    suma += parseInt(num);
  }
  return suma;
}


module.exports = sumar;
