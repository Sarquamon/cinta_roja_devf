const request = require("request");

// const URL_BASE_POKEAPI = "https://pokeapi.co/api/v2";

// const getPokeById = id => {
//   request
//     .get(`${URL_BASE_POKEAPI}/pokemon/${id}`, (err, response, body) => {
//       if (response.statusCode === 200) {
//         JSON.parse(body).name;
//       } else {
//         return `StatusCode: ${response.statusCode}. Error: ${err}`;
//       }
//     })
//     .on("error", err => {
//       console.log(err);
//     });
// };

// console.log(getPokeById(4));

// const promisePokeId = id => {
//   return new Promise((resolve, reject) => {
//     request.get(`${URL_BASE_POKEAPI}/pokemon/${id}`, (err, response, body) => {
//       if (response.statusCode === 200) {
//         resolve(JSON.parse(body).name);
//       } else {
//         reject(response.statusCode);
//       }
//     });
//   });
// };

// promisePokeId(4)
//   .then(pokeName => console.log(pokeName))
//   .catch(err => console.log(err));

// console.log(1);
// console.log(2);

// const promisePokeAb = id => {
//   return new Promise((resolve, reject) => {
//     request.get(`${URL_BASE_POKEAPI}/ability/${id}`, (err, response, body) => {
//       if (response.statusCode == 200) {
//         const pokeAble = [];
//         const content = JSON.parse(body);
//         console.log(content.name);
//         for (let i = 0; i < content.pokemon.length; i++) {
//           pokeAble.push(content.pokemon[i].pokemon.name);
//         }
//         resolve(pokeAble);
//       } else {
//         reject(response.statusCode);
//       }
//     });
//   });
// };

// promisePokeAb(6)
//   .then(pokeAb => console.log(pokeAb))
//   .catch(err => console.log(err));

const URL_SWAPI = "https://swapi.co/api";

const promiseCharPlanet = homeworldURL => {
  return new Promise((resolve, reject) => {
    request.get(homeworldURL, (err, response2, body2) => {
      if (response2.statusCode == 200) {
        const content2 = JSON.parse(body2);
        resolve(content2.name);
      } else {
        reject(response2.statusCode);
      }
    });
  });
};

const promiseChar = id => {
  return new Promise((resolve, reject) => {
    request
      .get(`${URL_SWAPI}/people/${id}`, (err, response, body) => {
        if (response.statusCode == 200) {
          const content = JSON.parse(body);
          const homeworldURL = content.homeworld;
          console.log(`El personaje es: ${content.name}`);
          const homeworldName = promiseCharPlanet(homeworldURL);
          resolve(homeworldName);
        } else {
          reject(response.statusCode);
        }
      })
      .on("Error", err => {
        console.log(err);
      });
  });
};

promiseChar(4)
  .then(result => console.log(`Su planeta natal es: ${result}`))
  .catch(err => console.log(`Error! ${err}`));
