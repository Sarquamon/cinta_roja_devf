const {Mascota} = require("./Mascota");

class Gato extends Mascota {
  constructor(garras) {
    super("Michi", 1, 20, 4, "naranja");
    this.garras = garras;
  }
}

const Michi = new Gato(true);

console.log(Michi);

module.exports = {
  Gato
};
