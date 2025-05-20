<<<<<<< HEAD
=======

>>>>>>> upstream/main
const { ask } = require('../helpers/input');

async function main() {

  const personas = [
    {
      nombre: "Rodrigo",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);
      }
    },
    {
      nombre: "Claudia",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);
      }
    },
    {
      nombre: "Heriberto",
      edad: 36,
      profesion: "Desarrollador",
      hobbies: ["nadar", "futbol", "leer"],
      birthDate: "1988-08-08",
      saludar: function () {
        console.log(`Hola mi nombre es ${this.nombre} `);
      }
    },
  ];

  const alumno1 = {
    nombre: "Yei Yei",
    matricula: "AL089778",
    promedio: 90,
    edad: 18,
    mostrarInfo: function () {
      console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
      if (this.edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("No es mayor de edad");
      }
    }
  }

  const alumno2 = {
    nombre: "Frank",
    matricula: "AL089790",
    promedio: 95,
    edad: 17,
    mostrarInfo: function () {
      console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
      if (this.edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("No es mayor de edad");
      }
    }
  }

  const alumno3 = {
    nombre: "Cris",
    matricula: "AL089767",
    promedio: 98,
    edad: 21,
    mayorDeEdad: false,
    mostrarInfo: function () {
      console.log(`Nombre: ${this.nombre}| \nMatricula: ${this.matricula}| \nPromedio: ${this.promedio}|`);
      if (this.edad >= 18) {
        console.log("Es mayor de edad");
      } else {
        console.log("No es mayor de edad");
      }
    },
    setMayorEdad: function () {
      if (this.edad >= 18) {
        this.mayorDeEdad = true;
      } else {
        this.mayorDeEdad = false;
      }
    }
  }

  const alumnos = [alumno1, alumno2, alumno3];

  for (let i = 0; i < alumnos.length; i++) {
    alumnos[i].mostrarInfo();
  }

  // alumno1.mostrarInfo();
  // alumno2.mostrarInfo();
  // alumno3.mostrarInfo();
}

main();