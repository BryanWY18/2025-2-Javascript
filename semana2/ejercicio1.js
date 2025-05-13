const { ask } = require('../helpers/input');

function saludar(nombre){
    console.log("Hola, "+nombre);
}

const personas=[
    "Pedro",
    "Juan",
    "Marco",
    "Alicia",
    "Erika",
    "Josúe",
    "Mónica",
    "Karolina",
];

for(let i=0 ; i < personas.length; i++){
    saludar(personas[i]);
}