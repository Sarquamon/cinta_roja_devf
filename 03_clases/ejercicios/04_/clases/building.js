class building {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    terrainWidth
  ) {
    this.numPuertas = numPuertas;
    this.numVentanas = numVentanas;
    this.numPisos = numPisos;
    this.direccion = direccion;
    this.altura = altura;
    this.largo = largo;
    this.terrainWidth = terrainWidth;
  }
  getNumPuertas() {
    return this.numPuertas;
  }
  getNumVentanas() {
    return this.numVentanas;
  }
  getNumPisos() {
    return this.numPisos;
  }
  getDir() {
    return this.direccion;
  }
  getAltura() {
    return this.altura;
  }
  getLargo() {
    return this.largo;
  }
  getTerrainWidth() {
    return this.terrainWidth;
  }
}

module.exports = {
  building
};
