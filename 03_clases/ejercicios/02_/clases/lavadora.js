const {electrodomesticos} = require("./electrodom");

const electrodom = new electrodomesticos(300, "blanco", 600);

class lavadora {
  constructor(carga) {
    this.carga = carga;
  }
  getPrecioFinal() {
    return this.carga * electrodom.getConsumo();
  }
}

module.exports = {
  lavadora
};
