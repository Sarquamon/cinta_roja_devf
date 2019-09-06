const {Pelicula} = require("./Pelicula");
const {Documental} = require("./Documental");

class Cine {
  constructor(sala, ubicacion) {
    this.sala = sala;
    this.ubicacion = ubicacion;
  }
  play(projection) {
    return `Se esta reproduciendo ${projection.getTitle()} de genero ${projection.getGenre()} en sala: ${
      this.sala
    } de ${
      this.ubicacion
    }. Dirigida por ${projection.getDirName()}. Durante ${projection.getDuration()} minutos`;
  }
}

const insterstellar = new Pelicula(
  "Interstellar",
  90,
  "Science Fiction",
  "Christopher Nolan"
);
const cosmos = new Documental("Cosmos", "Neil DeGrasse Tyson");
const cinepolis = new Cine(7, "Cinepolis Puebla");

// const spirit = new Pelicula("Spirit", "DreamWorks");
// const laMarchaDeLosPing = new Documental("La marcha de los pinguinos", "Jesus");

// console.log(cinepolis.play(cosmos));
console.log(cinepolis.play(insterstellar));
