const {Largometraje} = require("./largometraje");

class Pelicula extends Largometraje {
  constructor(title, duration, genre, dirName) {
    super(title, duration);
    this.genre = genre;
    this.dirName = dirName;
  }
  getGenre() {
    return this.genre;
  }
  getDirName() {
    return this.dirName;
  }
}

module.exports = {
  Pelicula
};

//sincronizidad
//threads, son hilos de ejecucion
/*
un hilo ejecuta una accion independientemente a su velocidad.
NODE permite crear n numeros de hilos, practicamente infinitos y esto permite al main ejecutarse 
*/
