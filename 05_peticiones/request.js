// const request = require("request");

// const URL_SWAPI = "https://swapi.co/api/people/3/";

// request.get(URL_SWAPI, (error, response, body) => {
//   //   console.log(body);
//   const cuerpo = JSON.parse(body);
//   //   console.log(cuerpo.name);
//   //   console.log(cuerpo.gender);
//   console.log(cuerpo);
// });

// //verbos http

// const request = require("request");

// const URL_POKEAPI = "https://pokeapi.co/api/v2";

// const getPokeById = id => {
//   const movesArr = [];
//   request.get(`${URL_POKEAPI}/pokemon/${id}`, (error, response, body) => {
//     const json = JSON.parse(body);
//     console.log(`Status Code: ${response.statusCode}`);
//     if (response.statusCode == 200) {
//       for (let i = 0; i < json.moves.length; i++) {
//         console.log(`Estoy en la pos ${i}`);
//         movesArr.push(String.toString(json.moves[i].move.name));
//       }
//       return movesArr;
//     }
//     // response.statusCode == 200
//     //   ? console.log(
//     //       `El tipo del pokemon es: ${JSON.parse(body).types[0].type.name}`
//     //     )
//     //   : console.log(`Error: codigo ${response.statusCode}`);
//   });
// };

// console.log(getPokeById(4));

const requestNASA = require("request");
const nasaKey = "MOhZbhdFfhjffWqPuLmPAwQFGgCfTf7kGQrlFlzV";

const promiseGetAsteroids = (startDate, endDate) => {
  return new Promise((resolve, reject) => {
    const URL_NASA_KEY = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${nasaKey}`;
    requestNASA.get(URL_NASA_KEY, (error, response, body) => {
      if (response.statusCode == 200) {
        const content = JSON.parse(body);
        for (let fecha in content.near_earth_objects) {
          for (let j = 0; j < content.near_earth_objects[fecha].length; j++) {
            if (
              content.near_earth_objects[fecha][j]
                .is_potentially_hazardous_asteroid == true
            ) {
              console.log(fecha);
              console.log(content.near_earth_objects[fecha][j].name);
              console.log(
                content.near_earth_objects[fecha][j]
                  .is_potentially_hazardous_asteroid
              );
              // resolve(`Estos son los meteoritos potencialmente peligrosos:
              // ${fecha}
              // ${content.near_earth_objects[fecha][j].name}
              // ${content.near_earth_objects[fecha][j].is_potentially_hazardous_asteroid}`);
            } else {
              reject(
                `No hay meteoritos potencialmente peligrosos entre las fechas ${startDate} y ${endDate}`
              );
            }
          }
        }
      } else {
        console.error(`Error!: ${error}`);
        console.log(response);
      }
    });
  });
};

promiseGetAsteroids("2019-08-28", "2019-09-03")
  .then(result => result)
  .catch(err => err);

//server-side rendering
