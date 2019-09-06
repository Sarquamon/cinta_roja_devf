// esquema prod y un esquema ticket
const express = require("express");
const bodyParser = require("body-parser");
const {product, ticket} = require("./schemas");

const PORT = 3000;

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hola!</h1>");
});

app.post("/create/product/", (req, res) => {
  const {name, price, endDate, brand, description} = req.body;

  const newProduct = product({
    name,
    price,
    endDate,
    brand,
    description
  });

  newProduct.save((err, product) => {
    !err ? res.status(201).send(product) : res.status(400).send(err);
  });
});

app.get("/all/product/", (req, res) => {
  product
    .find()
    .exec()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(409).send(err));
});

app.get("/product/:id", (req, res) => {
  const {id} = req.params;
  product
    .findById(id)
    .exec()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(209).send(err));
});

app.post("/create/ticket/", (req, res) => {
  const {product} = req.body;
  const newTicket = ticket({
    product
  });

  newTicket.save((err, body) => {
    !err ? res.status(200).send(body) : res.status(400).send(err);
  });
});

app.get("/all/ticket/", (req, res) => {
  ticket
    .find()
    .exec()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(409).send(err));
});

app.get("/ticket/:id", (req, res) => {
  const {id} = req.params;
  //   console.log(id);

  ticket
    .findById(id)
    .populate("product")
    .exec()
    .then(result => res.status(200).send(result))
    .catch(err => res.status(409).send(err));
});

app.listen(PORT, () => {
  console.log(`Server iniciado en: ${PORT}`);
});
