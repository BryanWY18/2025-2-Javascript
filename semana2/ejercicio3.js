const { ask } = require('../helpers/input');

async function main() {

    const nombres=["Ana","Mariana","Roberto","Luis","Sol"];

    for(let i=0; i<nombres.length;i++){
        if(nombres[i].length>=5){
            console.log(`${nombres[i]} tiene más de 5 caracteres`)
        }else{
            console.log(`${nombres[i]} tiene ${nombres[i].length} caracteres`)
        }
    }

////////////////////////////////

    const nombre2=["Oscar","Ana","Luis","Eduardo","Isabel","María","Ursula","Pedro"];
    const vocales=["a","e","i","o","u"];

    for(let a=0;a<nombre2.length;a++){
        const primeraLetra=nombre2[a][0].toLowerCase();
        for(let b=0;b<vocales.length;b++){
            if(primeraLetra==vocales[b]){
                console.log(vocales[b]);
            }
        }
    }

///////////////////////////////////

    const palabraAlReves=await ask ("Escribe una palabra: ");
    let resultado="";

    for(let c=palabraAlReves.length-1;c>=0;c--){
        resultado+=palabraAlReves[c];
    }
    console.log(resultado);

}

main();
