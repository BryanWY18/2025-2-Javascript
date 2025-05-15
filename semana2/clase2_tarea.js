// 🏠 Práctica para casa: Gestor interactivo de frutas (variante)
// 🎯 Objetivo:
// Crear un programa que gestione una lista de frutas con opciones para agregar, eliminar, ver la lista completa y salir. El usuario puede interactuar con el menú cuantas veces quiera hasta decidir salir.
//
// 🧩 Instrucciones:
// Crea un arreglo vacío llamado frutas.
//
// Usa un ciclo while que muestre el siguiente menú:
// ¿Qué deseas hacer?
// 1. Agregar fruta
// 2. Eliminar fruta
// 3. Ver lista de frutas
// 4. Salir

const { ask } = require('../helpers/input');

function saludo(){
    console.log("Buen día\nBienvenido a Net-Market, su administrador de alimentos");
};

async function main() {

    let option="";
    let frutas=[];

    console.log(saludo());
    while(option!=="4"){
        option= await ask(`\n¿Qué tarea desea realizar? \n 1.Agregar nueva fruta \n 2.Eliminar fruta \n 3.Ver lista de frutas \n 4.Salir \n `);
        if(option=="1"){
            let frutaNueva=await ask ("\nIngresa el nombre de la fruta que quieres agregar: ")
            frutas.push(frutaNueva);
            console.log(`\nSe agregó "${frutaNueva}" a la lista \n`)
            continue;
        }else if(option=="2"){
            if(frutas.length==0){
                console.log("\n No hay frutas registradas \n");
                continue;
            }else{
                let frutaAEliminar=await ask("\n Escriba que fruta desea eliminar: ")
                let index= frutas.indexOf(frutaAEliminar);
                if(index!==-1){
                    frutas.splice(index,1);
                    console.log(`\n ${frutaAEliminar} ha sido eliminado\n`);
                    continue;
                }else{
                    console.log(`\n "${frutaAEliminar}" no se encuentra en la lista\n`)
                    continue;
                }
            }
        }else if(option=="3"){
            if(frutas.length==0){
                console.log("\n No hay frutas registradas\n")
            }else{
                console.log("\n Estas son las frutas registradas:")
                console.log(`\n ${frutas}\n`);
            }
        }else if(option=="4"){
            console.log(`\n Gracias por usar el programa\n`)
            break;
        }else{
            console.log("\n Opción no permitida\n");
        }
    }

}

main();