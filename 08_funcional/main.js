/*
¿Que es prog funcional?
1. Es un paradigma de programación
2. Es una forma de construir software a partir de solamente funciones
3. La prog func es declarativa
4. Tiende a ser mas concisa
5. Se compone de func puras (ni librerias, funciones o procedimientos externos)
Una func pura es que no tiene efectos que la afecten. Por lo cual tiene parametros que se le declaran
Una func impura tiene efectos que la modifican. Por ejemplo Math.random();

investigar: devOPS, datos primitivos y no primitivos

Estos me retornan un arreglo basado en lo que deseo que me retornen
filter();
pop()
find()
push()
sort()
map()
foreach()
splice()
*/

//filter, filtra los elementos que yo el pida
// const numbers = [34, 65, 78, 95, 47, 102, 145, 167];

// const underHundred = numbers.filter(number => number < 100);

// console.log(underHundred);

// //map
// const empleados = [
//   {name: "Salomon", sueldo: 10000},
//   {name: "Jazmin", sueldo: 20000},
//   {name: "Jorge", sueldo: 5000}
// ];

// const newEmpleados = empleados.map(element => {
//   if (element.sueldo < 30000) {
//     return element.sueldo + 10000;
//   }
// });

// console.log(newEmpleados);

//TAREA!
const requestNASA = require("request");
const nasaKey = "MOhZbhdFfhjffWqPuLmPAwQFGgCfTf7kGQrlFlzV";

const promiseGetAsteroids = (startDate, endDate) => {
  return new Promise((resolve, reject) => {
    const URL_NASA_KEY = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${nasaKey}`;
    requestNASA.get(URL_NASA_KEY, (error, response, body) => {
      if (response.statusCode == 200) {
        const content = JSON.parse(body);
        const NEOarr = Object.values(content.near_earth_objects); // Object.values me retorna los valores de los objetos y KEYS me retorna las llaves
        const dangerousAster = [];
        NEOarr.forEach(date => {
          date.forEach(asteroid => {
            if (asteroid.is_potentially_hazardous_asteroid) {
              dangerousAster.push({
                name: asteroid.name,
                dangerous: asteroid.is_potentially_hazardous_asteroid
              });
            }
          });
          return response.statusCode == 200
            ? resolve(dangerousAster)
            : reject(resolve.statusCode);
        });
      } else {
        reject(resolve.statusCode);
      }
    });
  });
};

promiseGetAsteroids("2019-08-28", "2019-09-03")
  .then(result => console.log(result))
  .catch(err => console.log(err));

//express es un framework
//NEO4J - REDIS


