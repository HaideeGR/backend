
var os = require('os');

var misCpu = os.cpus();

console.log(misCpu);



// Parte 1 - Reto 2 USO DE MODULOS -- Modulo nativo

const crypto = require('crypto');

const secret = 'abcdefg';
const hash = crypto.createHmac('sha256', secret)
                   .update('I love cupcakes')
                   .digest('hex');
console.log(hash);



// Parte 2 - Reto 2 USO DE MODULOS -- Modulo colors.js

var colors = require('colors');

console.log('Hola señora zebra'.zebra); 




// Parte 3 - Reto 2 USO DE MODULOS -- Modulo nativo
var getDay = require('day');

console.log("Hoy es: " + dia[d.getDay()]);




