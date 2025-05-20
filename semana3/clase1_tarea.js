// 📝 Instrucciones:
// Crea un arreglo llamado alumnos.
//
// Usa un bucle while para permitir al usuario agregar objetos alumno al arreglo.
// Cada alumno debe tener:
//
// nombre
// edad
// calificacion
//
// Pregunta al usuario si desea seguir agregando más alumnos.
// Después de salir del ciclo, muestra:
// Cuántos alumnos tienen calificación aprobatoria (≥ 70).
// Cuántos pueden votar (edad ≥ 18).
// El promedio general de calificaciones.
// La calificación mayor.
// La calificación menor.

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

function whoVotes(numeros){
    let totalVotantes=[];
    let totalNoVotantes=[];
    for (let i = 0; i < numeros.length; i++) {
        if(numeros[i]>=18){
            totalVotantes.push(numeros[i]);
        }else{
            totalNoVotantes.push(numeros[i]);
        }
    }
    return {totalVotantes, totalNoVotantes}
};

function obtenerMayorMenor(numeros) {
    let mayor = numeros[0];
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }else if(numeros[i]< menor){
            menor = numeros[i];
        }
    };
    return {mayor, menor};
};

async function main() {

    const calif=[];
    const age=[];
    
    const alumnos = [];

    console.log("Bienvenido a DataSchool, comience a registrar los datos del alumnado");

    while(true){
        alta=await ask("\n¿Desea agregar a un nuevo alumno?: ")
        if(alta=="SI"){
            console.log("Datos del alumno:");
            let dataName=await ask("Nombre: ");
            let dataAge=Number(await ask("Edad: "));
            let dataCalif=Number(await ask("Calificación: "));
            alumnos.push({
                nombre:dataName,
                edad:dataAge,
                calificacion:dataCalif,
            });
            calif.push(dataCalif);
            age.push(dataAge);
            continue;
        }else if (alta=="NO"){
            break;
        }
    };

    let forPromedio=(promedio(calif))
    let forVote=(whoVotes(age));
    let forAprob=(aprobados(calif));
    let forMAyorMenor=(obtenerMayorMenor(calif));

    console.log(`\nAlumnos con calificación aprobatoria: ${forAprob.totalAprobado.length}\nAlumnos que pueden votar: ${forVote.totalVotantes.length}\nPromedio general: ${forPromedio}\nLa calificación mayor es: ${forMAyorMenor.mayor}\nLa calificación menor es: ${forMAyorMenor.menor}`);

};

main();
