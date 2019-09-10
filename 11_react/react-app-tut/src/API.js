import React, {Component} from "react";
import request from "request";

export class App extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    const URL = "https://swapi.co/api";

    const promise = id => {
      return new Promise((resolve, reject) => {
        request.get(`${URL}/people/${id}`, (err, response, body) => {
          if (response.statusCode === 200) {
            const content = JSON.parse(body);
            // console.log(`El nombre del personaje es: ${content.name}`);
            resolve(content.name);
          } else {
            reject(response.statusCode);
          }
        });
      });
    };

    promise(1)
      .then(result =>
        this.setState({
          data: result
        })
      )
      .catch(err => console.log(err));
  }

  render() {
    const {data} = this.state;
    console.log(data);

    // const result = data.map((entry, index) => {
    //   return <li key={index}>{entry}</li>;
    // });

    return <ul>4</ul>;
  }
}

export default App;
