const { ask } = require('../helpers/input');

async function main() {

    const persona={
        nombre: "Rodrigo",
        edad: 36,
        profesion: "Desarrollador",
        hobbies: ["nadar","futbol","leer"],
        saludar:function(){
            console.log(`Hola, mi nombre es ${this.nombre}`);
        }
    }

    //console.log(persona.nombre);
    //console.log(persona.edad);
    //console.log(persona.profesion);
    //console.log(persona.saludar());

    const alumno={
        nombre:"Bryan",
        matricula:"AA1234",
        promedio:75,
        edad:19,
        setMayorEdad:function(){
            if(this.edad>=18){
                return "SI";
            }else{
                return "NO";
            }
        },
        mostrarInfo:function(){
            console.log(`Nombre: ${alumno.nombre} | Matrícula: "${alumno.matricula}" | Promedio: ${alumno.promedio} | Edad: ${alumno.edad} | Puede votar: ${this.setMayorEdad()}`)
        }
    }

    alumno.mostrarInfo();

};

main();