const {drink} = require("./drinkClass");

class beer extends drink {
  constructor(quantity, alcoholPerc) {
    super(quantity);
    this.alcoholPerc = alcoholPerc;
  }
  getAlcoholPerc() {
    return this.alcoholPerc;
  }
}

module.exports = {
  beer
};
