class electrodomesticos {
  constructor(precio, color, capacidad) {
    this.precio = precio;
    this.color = color;
    this.capacidad = capacidad;
    this.consumoEnergetico = 100;
  }
  getPrecio() {
    return this.precio;
  }

  getColor() {
    return this.color;
  }

  getCapacidad() {
    return this.capacidad;
  }

  getConsumo() {
    return this.consumoEnergetico;
  }
}

module.exports = {
  electrodomesticos
};
