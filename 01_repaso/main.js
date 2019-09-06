// FUNCION QUE PIDA DOS VALORES Y RETORNE EL MAYOR
/*
const numeros = (numeroA, numeroB) => {
  if (numeroA > numeroB) {
    console.log("El numero mayor es: " + numeroA);
  } else {
    console.log("El numero mayor es: " + numeroB);
  }
};

numeros(20, 30);

console.log(Math.Max(7,3));

console.log('cadena_creada'.ToUpperCase);

let me permite cambiar valores aunque estos esten definidos, en cambio const no

const obj1 = {
  name: "Salomon",
  age: 20
};
console.log(obj.name);

obj1.name = "Lechuga"; //cambie el valor de una variable
console.log(obj.name);

obj1.tenis = true; //agregue una nueva variable

console.log(obj1);

this hace referencia al objeto que lo contiene


//FUNCION QUE RETORNE EL NOMBRE EN MAYUSCULAS QUE YO LE INGRESE
//con => para usar this se refiere a todo el navegador, tendria que darle la ruta entera.
const obj1 = {
  name: "salomon",
  age: 20,
  superAfuera: () => {
    console.log(this);
    return this;
  },
  superAdentro: () => {
    console.log(this);
    return this;
  },
  aMayusculas: function() {
    return this.name.toUpperCase();
  },
  aMayusculasArrowFunc: () => {
    return obj1.name.toUpperCase();
  }
};

console.log(obj1.aMayusculas());*/

/*realizar un semaforo que mande mensajes diferentes dependiendo de lo que tenga en string

let color = "verde";

if (color == "verde") {
  console.log("Avanza man");
} else if (color == "amarillo") {
  console.log("Mas lento we");
} else if (color == "rojo") {
  console.log("para weee");
} else {
  console.log("ya mejor explota");
}

switch (color) {
  case "verde":
    console.log("Avanza man");
    break;
  case "amarillo":
    console.log("Mas lento we");
    break;
  case "rojo":
    console.log("para weee");
    break;
  default:
    console.log("ya mejor explota");
}*/
/*
for (let i = 0; i <= 10; i++) {
  console.log(`Estoy en ${i}`);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 100; i++) {
  console.log(i);
  if (i % 3 == 0) {
    console.log("fizz " + i);
  }
  if (i % 5 == 0) {
    console.log("buzz " + i);
  }
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("fizz buzz " + i);
  }
}

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("par " + i);
  } else if (i % 2 != 0) {
    console.log(`none ${i}`);
  }
}*/

//DIA DOS:
//ARREGLOS
/*
const obj1 = {
  hola: "hola",
  estePerro: 35
};

console.log(obj1["hola"]);
console.log(obj1["estePerro"]);

const arr = [60, "hola", {name: "Salomon", edad: 20}, "otroString"];

console.log(arr[2]);
console.log(arr[2].name);
console.log(arr[2]["edad"]);

console.log(typeof arr); //los arreglos son objetos

console.log(arr);
arr.push(900);
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let arg of arr) {
  console.log(arg);
}
*/
//leer un arreglo de enteros y sacar su media y promedio

const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const getAverage = array => {
  let sumaTotal = 0;

  for (let i = 0; i < arr2.length; i++) {
    sumaTotal += i;
  }

  let promedio = sumaTotal / arr2.length;
  if (arr2.length % 2 != 0) {
    console.log("El valor de la mediana es: " + arr2.length / 2);
  } else {
    console.log("El valor 1 de la mediana es: " + arr2.length / 2);
    console.log("El valor 2 de la mediana es: " + (arr2.length / 2 - 1));
  }
  console.log("El promedio es: " + promedio);
};

getAverage(arr2);

//Leer nombre y sueldo de 8 empleados y mostrar el nombre y sueldo del empleado que mas gana

const empleados = [
  {name: "Jose", sueldo: 300},
  {name: "Luis", sueldo: 200},
  {name: "Jesus", sueldo: 100},
  {name: "Carlos", sueldo: 500},
  {name: "Salomon", sueldo: 5000},
  {name: "Jorge", sueldo: 600},
  {name: "Manuel", sueldo: 400},
  {name: "Eddy", sueldo: 5000}
];

const sueldoMayor = array => {
  let sueldoMejor = {
    sueldo: [],
    name: []
  };

  let mejoresSueldos = [];

  for (let i = 0; i < empleados.length; i++) {
    if (sueldoMejor.sueldo < array[i].sueldo) {
      sueldoMejor.sueldo = array[i].sueldo;
      sueldoMejor.name = array[i].name;
    } else if (sueldoMejor.sueldo == array[i].sueldo) {
      // console.log(sueldoMejor.name);
      mejoresSueldos.push(sueldoMejor);
      console.log(mejoresSueldos);

      // setTimeout(5000);
      sueldoMejor.name = "perrito";
      // console.log(sueldoMejor.name);
      console.log(mejoresSueldos);

      mejoresSueldos.push({sueldo:array[i].sueldo, name: array[i].name});
    }
  }
  console.log(mejoresSueldos);
};

sueldoMayor(empleados);

//escriba una func para ingresar x letra del alfabeto y checar si es vocal o consonante
const letras = letra => {
  if (
    letra == "a" ||
    letra == "e" ||
    letra == "i" ||
    letra == "o" ||
    letra == "u" ||
    letra == "A" ||
    letra == "E" ||
    letra == "I" ||
    letra == "O" ||
    letra == "U"
  ) {
    console.log("Es una vocal");
  } else if (!isNaN(letra)) {
    console.log("eso es un numero!");
  } else {
    console.log("Es una consonante");
  }
};

letras(0);

//TAREA
//checar tipos de string
//checar tipos de objeto

//OBJETOS: HERENCIA, POLIMORFISMO, ENCAPSULACION, INSTANCIA

//MODULAR: PHP. FUNCIONAL Y POO
