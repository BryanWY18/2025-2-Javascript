// Ejercicio: Simulador de clima
// Crear un programa que simule un clima basado en la temperatura actual.
// El programa debe pedir al usuario la temperatura actual y mostrar un mensaje indicando si hace frío, calor o si está templado.
// La lógica es la siguiente:
// - Si la temperatura es menor a 10 grados, mostrar "Hace frío"
// - Si la temperatura está entre 10 y 20 grados, mostrar "Está templado"
// - Si la temperatura está entre 20 y 30 grados, mostrar "Hace calor"
// - Si la temperatura es mayor a 30 grados, mostrar "Hace mucho calor"

const { ask } = require('../helpers/input');

async function main() {
  const temperatura = Number(await ask("¿Cuál es la temperatura actual? "));

  let cold = "Hace frío";
  let template = "Está templado";
  let hot = "Hace calor";
  let veryHot = "Hace mucho calor";
  let noData = "No se cumplen los valores de búsqueda";

  if (temperatura < 10 && temperatura > 0) {
    console.log(cold);
  } else if (temperatura >= 10 && temperatura <= 20) {
    console.log(template);
  } else if (temperatura >= 21 && temperatura <= 30) {
    console.log(hot);
  } else if (temperatura > 30) {
    console.log(veryHot);
  } else {
    console.log(noData);
  }
  // TODO: Implementar la lógica para temperaturas entre 10 y 20 grados
  // TODO: Implementar la lógica para temperaturas entre 20 y 30 grados
  // TODO: Implementar la lógica para temperaturas superiores a 30 grados

}

main();
