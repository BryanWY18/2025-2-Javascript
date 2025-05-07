// Ejercicio: Crear una calculadora simple que realice operaciones básicas (suma, resta, multiplicación y división) entre dos números.

const { ask } = require('../helpers/input');

async function main() {
  const num1 = Number(await ask('Ingresa el primer número: '));
  const num2 = Number(await ask('Ingresa el segundo número: '));

  const suma = num1 + num2;
  const resta = num1 - num2;
  const mult = num1 * num2;
  const div = num1 / num2;
  // TODO: Implementar la resta, multiplicación y división

  console.log("");
  console.log("Los resultados con ambos números son:");
  console.log("");
  console.log('Suma:', suma);
  console.log("Resta:", resta);
  console.log("Multiplicación:", mult);
  console.log("División:", div);
  console.log("");
  // TODO: Mostrar el resultado de la resta, multiplicación y división

}

main();
