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

  const gradacion = await ask ("Seleccione la escala de temperatura: °C/°F: ")
  const temperatura = Number(await ask("¿Cuál es la temperatura actual? "));

  let cold = "Hace frío";
  let template = "Está templado";
  let hot = "Hace calor";
  let veryHot = "Hace mucho calor";
  let noData = "No se cumplen los valores de búsqueda";

  const question = "¿Desea alguna recomendación? SI/NO: ";

  let noThanks = "Que tenga buen día";
  let answer1 = "Salga abrigado";
  let answer2 = "Use ropa holgada";
  let answer3 = "Manténgase hidratado";
  let answer4 = "Evite exponerse al sol";

  if(gradacion==="°C"){
    if (temperatura < 10 && temperatura > 0) {
      console.log(cold);
      const recomend = await ask (question);
          if(recomend === "SI"){
            console.log(answer1);
          } else {
            console.log(noThanks);
          }
    } else if (temperatura >= 10 && temperatura <= 20) {
      console.log(template);
      recomend = await ask (question);
        if(recomend === "SI"){
          console.log(answer2);
        } else {
          console.log(noThanks);
        }
    } else if (temperatura >= 21 && temperatura <= 30) {
      console.log(hot);
      recomend = await ask (question);
        if(recomend === "SI"){
          console.log(answer3);
        } else {
          console.log(noThanks);
        }
    } else if (temperatura > 30) {
      console.log(veryHot);
      recomend = await ask (question);
        if(recomend === "SI"){
          console.log(answer4);
        } else {
          console.log(noThanks);
        }
    } else {
      console.log(noData);
    }
  }else{
    if (temperatura < 32) {
      console.log("El frío es extremo, tome precauciones");
    } else if (temperatura >= 33 && temperatura <=50) {
      console.log(cold);
      recomend = await ask (question);
          if(recomend === "SI"){
            console.log(answer1);
          } else {
            console.log(noThanks);
          }
    } else if (temperatura >= 51 && temperatura <= 68) {
      console.log(template);
      recomend = await ask (question);
        if(recomend === "SI"){
          console.log(answer2);
        } else {
          console.log(noThanks);
        }
    } else if (temperatura >= 69 && temperatura <= 85) {
      console.log(hot);
      recomend = await ask (question);
        if(recomend === "SI"){
          console.log(answer3);
        } else {
          console.log(noThanks);
        }
    } else if (temperatura > 87) {
      console.log(veryHot);
      recomend = await ask (question);
        if(recomend === "SI"){
          console.log(answer4);
        } else {
          console.log(noThanks);
        }
    } else {
      console.log(noData);
    }
  }
  // TODO: Implementar la lógica para temperaturas entre 10 y 20 grados
  // TODO: Implementar la lógica para temperaturas entre 20 y 30 grados
  // TODO: Implementar la lógica para temperaturas superiores a 30 grados

}

main();
