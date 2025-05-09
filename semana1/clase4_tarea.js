// Ejercicio: Pedir al usuario su fecha de nacimiento
//
// Instrucciones:
// 1. Mostrar en pantalla los días equivalentes a la edad actual del usuario
// 2. Mostrar en pantalla los meses equivalentes a la edad actual del usuario
// 3. Mostrar los años que tiene el usuario.

const { ask } = require('../helpers/input');

function days(month, year){
    const daysOfMonth=30;
    const yourMonths=months(month, year);
    const total=daysOfMonth*yourMonths;
    return total;
}

function months(month,year){
    const monthsOfYear=12;
    const yourAge=years(year)-1;
    totalMonths= (monthsOfYear*yourAge)+month;
    return totalMonths;
}

function years(year, month){
    const actualYear=2025;
    const yourAge=actualYear-year;
    
    if(month<11){
        const newyourAge=yourAge-1;
        return newyourAge;
    }else{
        return yourAge;
    };

}


async function main() {

    const fecha=await ask ("Introduce tu fecha de nacimiento (DD-MM-AAAA), presiona ENTER para comenzar");
    const day=Number(await ask ("Día: "));
    const month=Number(await ask ("Mes: "));
    const year=Number(await ask ("Año: "));

    const totalDays=days(month, year);
    const totalMonths=months(month,year);
    const totalYears=years(year, month);

    console.log("Has vivido "+totalDays+" días");
    console.log("Has vivido "+totalMonths+" meses");
    console.log("Tienes "+totalYears+" años");

}

main();