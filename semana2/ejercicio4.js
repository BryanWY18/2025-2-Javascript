const { ask } = require('../helpers/input');

function obtenerPromedio(numeros){
    let suma=0;
    for(let i=0; i<numeros.length;i++){
        suma=suma+numeros[i];
        console.log(suma);
    };
    const promedio=suma/numeros.length;
    return promedio;
};

function obtenerMayor(numeros){
    let mayor=0;
    for(let i=0;i<numeros.length;i++){
        if(numeros[i]>mayor){
            mayor=numeros[i];
        }
    };
    return mayor;
};

function resumenEstadistico(numeros){
    const promedio=obtenerPromedio(numeros);
    let maximo=obtenerMayor(numeros);
    let minimo=numeros[0];

    for(let i=0;i<numeros.length;i++){
        if(numeros[i]<minimo){
            minimo=numeros[i];
        }
    };
    return {promedio, minimo, maximo};

};

function nombresConVocal(nombres,vocales){
        let nombresSelect=[];

        for(let i=0;i<nombres.length;i++){
            const nombre=nombres[i].toLowerCase();
            console.log(nombre);

            for(let v=0;v<vocales.length;v++){
                const vocal=vocales[v];
                console.log(vocal);

                
                if(vocal.filter (nombre)<2){
                    nombresSelect.push(nombre);
                    console.log(nombresSelect);
                }
            }
        }        
        return nombresSelect;
}

async function main() {
    const edades=[20,18,25,30,22];
    console.log(`Promedio= ${obtenerPromedio(edades)}`);

    const lista=[5,20,99,3];
    console.log(`El número mayor de: ${lista} = ${obtenerMayor(lista)}`)

    const datos=[70,80,90,100,85];
    console.log(resumenEstadistico(datos));

    const nombres=["Oscar","Ana","Luis","Eduardo","Isabel","Mary","Ursula","Pedro"];
    const vocales=["a","e","i","o","u"];
    console.log(nombresConVocal(nombres,vocales));

};

main();