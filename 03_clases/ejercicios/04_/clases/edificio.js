const {building} = require("./building");

class highBuilding extends building {
  constructor(
    numPuertas,
    numVentanas,
    numPisos,
    direccion,
    altura,
    largo,
    terrainWidth
  ) {
    super(
      numPuertas,
      numVentanas,
      numPisos,
      direccion,
      altura,
      largo,
      terrainWidth
    );
  }
  setNewDir(newDir) {
    this.direccion = newDir;
  }
}

module.exports = {
  highBuilding
};
