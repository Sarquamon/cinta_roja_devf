// const callback1 = () => {
//   console.log("Este es un mensaje desde un callback");
// };

// const callback2 = () => {
//   console.log("Perro");
// };

// function mostrarMensaje(callback) {
//   callback();
// }

// mostrarMensaje(callback1);

/*2.- Crear una función de orden superior que reciba como
argumento un mensaje y callback. Según el callback que
se pase como argumento, la función de orden superior
debe mostrar el mensaje en un console.warn o en un console.log*/

// const func1 = message => {
//   console.log(message);
// };

// const func2 = message => {
//   console.warn(message);
// };

// function mostrarMensaje(callback, message) {
//   callback(message);
// }

// mostrarMensaje(func2, "Hola!");

/*3.- Crear una función de orden superior que reciba como
   argumentos dos números y un callback. Según el callback
   que se pase a la función, se devuelve la suma de los
   dos números, la resta de los dos números o la
   multiplicación de los dos números.*/

// const sumaNumeros = (a, b) => {
//   return a + b;
// };

// const restarNumeros = (a, b) => {
//   return a - b;
// };

// const multNumeros = (a, b) => {
//   return a * b;
// };

// function mostrarResultados(callback, a, b) {
//   return callback(a, b);
// }

// console.log(mostrarResultados(sumaNumeros, 2, 2));

/*4.- Escribe una funcion de orden superior que reciba una cadena de
   caracteres y debe devolver, mediante un callback, la
   cadena de caracteres en mayusculas o en minusculas.
           ordenSuperior("PejeLagarto", minus);
           -> pejelagarto
           ordenSuperior("PejeLagarto", mayus);
           -> PEJELAGARTO*/

// const cambiarMay = string => {
//   return string.toUpperCase();
// };

// const cambiarMin = string => {
//   return string.toLowerCase();
// };

// function mostrarCambioMayMin(callback, string) {
//   return callback(string);
// }

// console.log(mostrarCambioMayMin(cambiarMay, "salomon"));

/*5.- Hacer un arreglo de 4 cantidades de tiempo en minutos
   EJEMPLO[120, 80, 200, 100] y tomar solo las cantidades
   mayores a dos horas (hacer la comparación en horas)
   mediante un callback */

// const EJEMPLO = [121, 250, 200, 500];

// const mayorA2Horas = arr => {
//   const MaDos = [];
//   if (Array.isArray(arr)) {
//     for (let i in arr) {
//       if (arr[i] > 120) {
//         MaDos.push(arr[i]);
//         //MaDos[i] = arr[i];
//       } else if (arr[i] < 120) {
//         console.log(`¡${arr[i]}min es menor a 2hrs!`);
//       } else if (arr[i] == 120) {
//         console.log(`¡${arr[i]}min es igual a 2hrs!`);
//       } else {
//         console.log(`¡No acepto letras ni caracteres especiales!`);
//       }
//     }
//   } else {
//     return `¡Tiene que ser un arreglo!`;
//   }

//   return `Acá estan los min mayores a 2hrs:
//   ${MaDos}`;
// };

// function mostrarMayor2Horas(callback, arr) {
//   return callback(arr);
// }

// console.log(mostrarMayor2Horas(mayorA2Horas, EJEMPLO));

// function foo(b) {
//   var a = 5;
//   return a * b + 10;
// }

// function bar(x) {
//   var y = 3;
//   return foo(x * y);
// }

// console.log(bar(6));

const promesa = new Promise(function(resolve, reject) {
  // if (10 > 9) {
  //   resolve("Diez es mayor a 9");
  // } else {
  //   reject("estoy en reject");
  // }
  //OTRO TIPO DE CONDICIONES
  // let respuestaBD = 200;
  // if(respuestaBD === 200){
  //   resolve("Diez es mayor a 9");
  // } else {
  //   reject("estoy en reject");
  // }
  
  10 > 9 ? resolve "Diez es mayor a 9" :
});

promesa
  .then(function(resolve) {
    console.log(resolve);
    return resolve;
  })
  .catch(function(reject) {
    console.log(reject);
    return reject;
  });
