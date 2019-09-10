import React, {Component} from "react";
import axios from "axios";

export class Exalumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      _id: props.match.params.id,
      nombre: "",
      generation: "",
      carrera: "",
      age: Number,
      income: 0,
      currentJob: ""
    };
  }

  componentDidMount() {
    axios
      .get(`https://escuela-parte1.herokuapp.com/graduate/${this.state._id}`)
      .then(alumno => {
        this.setState({
          nombre: alumno.data.nombre,
          generation: alumno.data.generation,
          carrera: alumno.data.carrera,
          age: alumno.data.age,
          income: alumno.data.income,
          currentJob: alumno.data.currentJob
        });
        console.log(this.state);
      })
      .catch(err => console.log(`Error: ${err}`));
  }

  render() {
    return (
      <div>
        <h1>{this.state.nombre}</h1>
        <h3>{this.state.age}</h3>
        <h3>{this.state.currentJob}</h3>
        <h3>{this.state.income}</h3>
        <h3>{this.state.carrera}</h3>
        <h3>{this.state.generation}</h3>
      </div>
    );
  }
}

export default Exalumno;
