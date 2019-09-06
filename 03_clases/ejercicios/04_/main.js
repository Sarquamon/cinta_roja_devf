/*
------------------------------------------------------------
4.- Crear la clase construcción que hereda a otras dos
   clases "casa" y "edificio".
   a. Sus atributos son: numPuertas, numVentanas, numPisos,
      direccion, altura, largo y ancho del terreno.
   b. Cada uno tiene un metodo que regresa los metros
      cuadrados
   c. Un metodo debe regresar la direccion
   d. Un metodo debe permitir modificar la direccion
   e. Buscar la mejor manera de aprovechar la herencia
------------------------------------------------------------
*/

const {highBuilding} = require("./clases/edificio");
const {house} = require("./clases/casa");

const edificio = new highBuilding(2, 40, 30, "calle corfu #51", 100, 50, 90);
const casa = new house(2, 10, 2, "calle corfu #72", 50, 50, 90);

// edificio.setNewDir("calle corfu #61");
// casa.setNewDir("calle corfu #82");

console.log(
  `El edificio tiene ${edificio.getNumPuertas()} puertas, ${edificio.getNumVentanas()} 
  ventanas, ${edificio.getNumPisos()} pisos. Su direccion es: ${edificio.getDir()}, 
  con ${edificio.getAltura()}mts de altura, ${edificio.getLargo()}mts de largo 
  en ${edificio.getTerrainWidth()}mts cuadrados de terreno`
);

console.log(
  `La casa tiene ${casa.getNumPuertas()} puertas, ${casa.getNumVentanas()}
    ventanas, ${casa.getNumPisos()} pisos. Su direccion es: ${casa.getDir()},
    con ${casa.getAltura()}mts de altura, ${casa.getLargo()}mts de largo
    en ${casa.getTerrainWidth()}mts cuadrados de terreno`
);
