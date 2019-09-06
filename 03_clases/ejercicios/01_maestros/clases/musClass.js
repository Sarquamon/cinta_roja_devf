const {Maestros} = require("./maestroClass");

class musClass extends Maestros {
  constructor(teacherName, notes, age) {
    super(teacherName, notes);
    this.age = age;
  }
  getAge() {
    return this.age;
  }
}

module.exports = {
  musClass
};
