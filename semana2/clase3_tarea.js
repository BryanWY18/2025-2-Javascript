// 🏠 Práctica para casa:
// Contar cuántos de una lista de edades pueden votar
//
// Instrucciones:
// Crea un arreglo de edades (pedirlo al usuario).
//
// Recorre el arreglo.
//
// Cuenta cuántos tienen 18 años o más.
//
// Muestra el total.

const { ask } = require('../helpers/input');

async function main() {

    const edades=[];
    let resultado=[];

    while(edades.length!==6){
        let option= await ask(`Ingresa una edad: `);
        edades.push(option);
        continue;
    };
    console.log(`Edades tiene ${edades.length} registros`);
    console.log(edades);

    for(let i=0;i<=edades.length;i++){
        if(edades[i]>=18){
            resultado.push(edades[i]);
        }
    };
    console.log(`Solo ${resultado.length} usuarios tienen edad para votar`);
    console.log(resultado);

}

main();