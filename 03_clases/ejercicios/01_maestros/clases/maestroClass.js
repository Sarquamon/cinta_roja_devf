/*
------------------------------------------------------------
1. Hacer superclase Maestro y subclases Maestro de Física y
  Maestro de Música y a cada uno asignarle su materia y
  calcular su promedio de grupo a partir de calificaciones
  (puedes usar arreglos). El maestro de física tiene un
  atributo "antiguedad" que guarda un valor numerico,
  mientras que el maestro de música tiene un atributo "edad"
  también guardando un valor numérico.
------------------------------------------------------------
*/
class Maestros {
  constructor(teacherName, notes) {
    this.teacherName = teacherName;
    this.notes = notes;
  }
  getTeacherName() {
    return this.teacherName;
  }
  getNotes() {
    if (Array.isArray(this.notes)) {
      let avg = 0;
      for (let i = 0; i < this.notes.length; i++) {
        avg += this.notes[i];
      }
      return avg;
    } else {
      return `I need an array!`;
    }
  }
}
module.exports = {
  Maestros
};
