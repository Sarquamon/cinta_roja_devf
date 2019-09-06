/*
------------------------------------------------------------
5.- Crear una clase Bebida que herede a dos clases Cerveza
   y Refresco. Ambas clases deben tener la propiedad
   cantidad (ml). La clase Refresco debe tener el atributo
   azucar(g) y la clase Cerveza debe el atributo
   porcentajeAlcohol. Crear los getters y setters
   correspondientes.
------------------------------------------------------------
*/

const {soda} = require("./clases/soda");
const {beer} = require("./clases/beer");

let alcoholPerc = 2.5;
let sugar = 2;

const coke = new soda(350, sugar);
const paulaners = new beer(500, alcoholPerc);

console.log(
  `La Paulanner's tiene una cantidad de ${paulaners.getAlcoholPerc()}% de alcohol en un tamaño de ${paulaners.getQuantity()}ml.`
);

console.log(
  `La coca-cola tiene una cantidad de ${coke.getSugar()}g de azucar en un tamaño de ${coke.getQuantity()}ml.`
);
