const {musClass} = require("./musClass");
const {physicsTeacher} = require("./fisicClass");

const calif = [2, 1, 4, 6, 2, 5, 7, 2, 10, 5, 6, 8, 9];

const musica = new musClass("Luis", calif, 20);
const physic = new physicsTeacher("Jorge", 5, calif);

console.log(
  `El maestro de musica ${musica.getTeacherName()} tiene ${musica.getAge()} años de edad y su calificacion final del grupo es: ${musica.getNotes()}`
);
console.log(
  `El maestro de fisica ${physic.getTeacherName()} tiene ${physic.getOld()} años de trabajar y su calificacion final del grupo es: ${physic.getNotes()}`
);
