function sumar(string) {
  if (string === '') return 0;

  let delimitador = /,|\n/;

  if (string.startsWith('//')) {
    delimitador = string[2];
    string = string.substring(4);
  }

  const numeros = string.split(delimitador);
  let suma = 0;
  for (let num of numeros) {
    suma += parseInt(num);
  }
  return suma;
}


module.exports = sumar;
