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

function promedio(alumnos) {
  let total = 0;
  for (let i = 0; i < alumnos.length; i++) {
    total = total + alumnos[i].calificacion;
  }
  const promedio = total / alumnos.length;
  return promedio;
};

function aprobados(alumnos){
    let totalAprobado=[];
    let totalNoAprobados=[];
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].calificacion>=70){
            totalAprobado.push(alumnos[i]);
        }else{
            totalNoAprobados.push(alumnos[i]);
        }
    }
    return {totalAprobado, totalNoAprobados}
};

function whoVotes(alumnos){
    let totalVotantes=[];
    let totalNoVotantes=[];
    for (let i = 0; i < alumnos.length; i++) {
        if(alumnos[i].edad>=18){
            totalVotantes.push(alumnos[i]);
        }else{
            totalNoVotantes.push(alumnos[i]);
        }
    }
    return {totalVotantes, totalNoVotantes}
};

function obtenerMayorMenor(alumnos) {
    let mayor = alumnos[0].calificacion;
    let menor = alumnos[0].calificacion;
    let nombreMayor ="";
    let nombreMenor="";
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].calificacion > mayor) {
            mayor = alumnos[i].calificacion;
            nombreMayor=alumnos[i].nombre;
        }else if(alumnos[i].calificacion< menor){
            menor = alumnos[i].calificacion;
            nombreMenor=alumnos[i].nombre;
        }
    };
    return {mayor, menor, nombreMayor, nombreMenor};
};

async function main() {

    const alumnos=[];
    
    console.log("Bienvenido a DataSchool, comience a registrar los datos del alumnado\nEscriba SI para agregar registro\nEscriba NO para terminar.");

    while(true){
        alta=await ask("\n¿Desea agregar a un nuevo alumno?: ")
        if(alta=="SI"){
            console.log("Datos del alumno:");
            let dataName=await ask("* Nombre: ");
            let dataAge=Number(await ask("* Edad: "));
            let dataCalif=Number(await ask("* Calificación: "));
            alumnos.push({
                nombre:dataName,
                edad:dataAge,
                calificacion:dataCalif,
            });
            continue;
        }else if (alta=="NO"){
            break;
        }
    };

    let forPromedio=(promedio(alumnos))
    let forVote=(whoVotes(alumnos));
    let forAprob=(aprobados(alumnos));
    let forMAyorMenor=(obtenerMayorMenor(alumnos));

    console.log(`\nAlumnos con calificación aprobatoria: ${forAprob.totalAprobado.length}\nAlumnos que pueden votar: ${forVote.totalVotantes.length}\nPromedio general: ${forPromedio}\nLa calificación mayor es: ${forMAyorMenor.mayor}, correspondiente al alumno ${forMAyorMenor.nombreMayor}\nLa calificación menor es: ${forMAyorMenor.menor}, correspondiente al alumno ${forMAyorMenor.nombreMenor}`);


};

main();
