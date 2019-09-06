const {Largometraje} = require("./largometraje");

class Documental extends Largometraje {
  constructor(title, dirName) {
    super(title);
    this.dirName = dirName;
  }
  getDir() {
    return this.dirName;
  }
}

module.exports = {
  Documental
};
