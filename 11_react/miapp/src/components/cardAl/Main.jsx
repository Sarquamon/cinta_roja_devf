import React, {Component} from "react";
import axios from "axios";
import CardAlumno from "./CardAlumno";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Exalumnos: [],
      nombre: "",
      carrera: "",
      generation: "",
      age: "",
      currentJob: "",
      income: ""
    };
  }

  componentDidMount() {
    axios
      .get("https://escuela-parte1.herokuapp.com/all/graduate")
      .then(result => {
        this.setState({
          Exalumnos: result.data
        });
      })
      .catch(err => console.log(err));
  }

  redirect = id => {
    this.props.history.push(`/Exalumno/${id}`);
  };

  renderExalumnos() {
    if (this.state.Exalumnos.length !== 0) {
      const exalumno = this.state.Exalumnos.map((alumno, index) => {
        return (
          <CardAlumno alumno={alumno} redirect={this.redirect} key={index} />
        );
      });
      return exalumno;
    } else {
      return (
        <div>
          <label htmlFor="">No tienes alumnos que mostrar</label>
        </div>
      );
    }
  }

  onInputCheck = e => {
    let name = e.target.name;
    let value = e.target.value;

    this.setState({
      [name]: value
    });
  };

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.nombre !== "") {
      axios
        .post(
          "https://escuela-parte1.herokuapp.com/create/graduate",
          this.state
        )
        .then(res => {
          console.log(res);
          window.location.reload();
        })
        .catch(err => console.log(err));
    } else {
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <h3>Registrar un nuevo usuario</h3>

            <form onSubmit={this.onFormSubmit}>
              <div className="form-group">
                <label className="" htmlFor="inputName">
                  Nombre:
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="nombre"
                  placeholder="Ponga su nombre"
                  value={this.state.nombre}
                  onChange={this.onInputCheck}
                  id="inputName"
                />
              </div>

              <div className="form-group">
                <label htmlFor="inputCarrera">Carrera:</label>
                <input
                  type="text"
                  name="carrera"
                  placeholder=""
                  value={this.state.carrera}
                  onChange={this.onInputCheck}
                  id="inputCarrera"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputAge">Edad:</label>
                <input
                  type="text"
                  name="age"
                  placeholder=""
                  value={this.state.age}
                  onChange={this.onInputCheck}
                  id="inputAge"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputGeneration">Generaci&oacute;n:</label>
                <input
                  type="text"
                  name="generation"
                  placeholder=""
                  value={this.state.generation}
                  onChange={this.onInputCheck}
                  id="inputGeneration"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputCurrentJob">Puesto:</label>
                <input
                  type="text"
                  name="currentJob"
                  placeholder=""
                  value={this.statecurrentJob}
                  onChange={this.onInputCheck}
                  id="inputCurrentJob"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label htmlFor="inputIncome">Sueldo:</label>
                <input
                  type="text"
                  name="income"
                  placeholder=""
                  value={this.state.income}
                  onChange={this.onInputCheck}
                  id="inputIncome"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success btn-block">
                Save
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h3>Exalumnos registrados</h3>
        <div className="row">
          <div className="container">
            <div className="col-md-12">{this.renderExalumnos()}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
