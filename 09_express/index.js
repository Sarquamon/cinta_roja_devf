const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const PORT = 7000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get("/", (request, response) => {
  //   response.send({message: "Bienvenido al Himalaya"});
  response.send("<h1>Hola weyes</h1>");
});

app.get("/get/users", (req, res) => {
  res.send({id: "ñwo8rywifgileb", name: "Salomon"});
});

app.post("/create/user", (req, res) => {
  const {name, age, city} = req.body;

  const newUser = {
    name,
    age,
    city
  };

  res.status(201).send({newUser});
  console.log(newUser);
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  res.send({message: `Tu id es: ${id}`});
});

app.get("/search", (req, res) => {
  console.log(req.query);
  const {q, color, vidas} = req.query;
  res.send({q, color, vidas});
});

app.listen(PORT, () => {
  console.log(`Server en puerto ${PORT}`);
});

//nodemon. Un demonio es un proceso que esta ejecutandose siempre
