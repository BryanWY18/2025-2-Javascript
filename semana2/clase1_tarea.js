// Práctica para casa:
// Imprimir números pares del 1 al 100
const { ask } = require('../helpers/input');

async function main() {

    function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
    }

    let limite = Number(await ask("Hasta que numero quieres contar: "));
    let i = 1;

  while (i <= limite) {
    if(i%2===0){
        console.log(i);
        await sleep(1000);
    }else{
        console.log(`${i} no es par`)
        await sleep(1000);
    }
    i++;
  }

}

main();
