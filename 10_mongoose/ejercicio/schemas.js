const mongoose = require("mongoose");

const URL_MONGO =
  "mongodb+srv://admin:VZUQAaTr9wBgU5Jx@devfcintaroja-lmcx2.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(URL_MONGO, {useNewUrlParser: true}, err => {
  !err
    ? console.log("Succesful mongoDB connection")
    : console.log(`Connection error
    ${err}`);
});

const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: String,
    price: Number,
    endDate: String,
    brand: String,
    description: String
  },
  {timestamps: true}
);

const ticketSchema = new Schema(
  {
    product: {
      type: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products"
        }
      ]
    }
  },
  {timestamps: true}
);

const product = mongoose.model("products", productSchema);
const ticket = mongoose.model("ticket", ticketSchema);

module.exports = {
  product,
  ticket
};
