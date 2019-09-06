class Mascota {
  constructor(nombre, edad, size, legs, color) {
    this.nombre = nombre;
    this.edad = edad;
    this.size = size;
    this.legs = legs;
    this.color = color;
  }

  comer(comida) {
    return `Estoy comiendo ${comida} we`;
  }

  cagar() {
    return `No molestes we`;
  }
}

//exporta mi codigo
module.exports = {
  Mascota
};

//crear otro archivo en clases -> gato hacer lo mismo de perico pero en este caso con gato
