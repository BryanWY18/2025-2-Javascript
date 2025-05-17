//📘 Tarea: Análisis de calificaciones
//🎯 Objetivo:
//Aplicar funciones, bucles y lógica condicional para procesar un arreglo de números.
//
//📝 Instrucciones:
//Crea una función llamada analizarCalificaciones que reciba un arreglo de números (enteros del 0 al 100) que representan calificaciones de estudiantes. La función debe devolver un objeto con la siguiente información:
//
//Cantidad de aprobados (calificaciones ≥ 70)
//
//Cantidad de reprobados (calificaciones < 70)
//
//Promedio general
//
//La calificación más alta y la más baja

const { ask } = require('../helpers/input');


function promedio(numeros) {
  let total = 0;
  for (let i = 0; i < numeros.length; i++) {
    total = total + numeros[i];
  }
  const promedio = total / numeros.length;
  return promedio;
};

function aprobados(numeros){
    let totalAprobado=[];
    let totalNoAprobados=[];
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>=70){
            totalAprobado.push(numeros[i]);
        }else{
            totalNoAprobados.push(numeros[i]);
        }
    }
    return {totalAprobado, totalNoAprobados}
};

function obtenerMayor(numeros) {
    let mayor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
    }
    return mayor;
};

function obtenerMenor(numeros){
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] < menor) {
        menor = numeros[i];
        }
    }
    return menor;
}

function analizarCalificaciones(numeros){
    const promedioValor=promedio(numeros);
    const aprobadosValor=aprobados(numeros);
    const califAlta=obtenerMayor(numeros);
    const califBaja=obtenerMenor(numeros);

    return {promedioValor, aprobadosValor, califAlta, califBaja};
}

async function main() {

    const calif=[];
    
    while(calif.length<10){
        const addCalif=Number(await ask("Añada una calificación (mínimo 10 registros): "));
        calif.push(addCalif);
        continue;
    }

    const resumen=analizarCalificaciones(calif);

    console.log(`Promedio general = ${resumen.promedioValor}`);
    console.log(`La cantidad de aprobados son: ${resumen.aprobadosValor.totalAprobado.length}`);
    console.log(`La cantidad de reprobados son: ${resumen.aprobadosValor.totalNoAprobados.length}`);
    console.log(`La calificación mayor es: ${resumen.califAlta}`);
    console.log(`La calificación menor es: ${resumen.califBaja}`);
};

main();