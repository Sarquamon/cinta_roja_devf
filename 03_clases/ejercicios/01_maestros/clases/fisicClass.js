const {Maestros} = require("./maestroClass");

class physicsTeacher extends Maestros {
  constructor(teacherName, old, notes) {
    super(teacherName, notes);
    this.old = old;
  }
  getOld() {
    return this.old;
  }
}

module.exports = {
  physicsTeacher
};
