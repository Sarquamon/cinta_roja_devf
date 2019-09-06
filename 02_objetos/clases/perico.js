const {Mascota} = require("./Mascota");

class Perico extends Mascota {
  constructor(pico) {
    super("Felix", 1, 20, 2, "Rojo"); // super es para la clase de arriba
    this.pico = pico;
  }
}

const felix = new Perico(true);
console.log(felix);

module.exports = {
  Perico
};
