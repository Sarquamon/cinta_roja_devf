const {drink} = require("./drinkClass");

class soda extends drink {
  constructor(quantity, sugar) {
    super(quantity);
    this.sugar = sugar;
  }
  getSugar() {
    return this.sugar;
  }
}

module.exports = {
  soda
};
