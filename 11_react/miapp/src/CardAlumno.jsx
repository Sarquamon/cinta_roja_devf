import React, {Component} from "react";

export class CardAlumno extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alumno: this.props.alumno
    };
  }
  render() {
    return (
      <div>
        <div className="col-md-4">
          <div className="card">
            <div className="card-head">
              <h2>{this.state.alumno.nombre}</h2>
            </div>
            <div className="card-body">
              <label htmlFor="{this.state.alumno.carrera}"></label>
              <label htmlFor="{this.state.alumno.generation}"></label>
              <label htmlFor="{this.state.alumno.currentJob}"></label>
              <label htmlFor="{this.state.alumno.age}"></label>
              <label htmlFor="{this.state.alumno.income}"></label>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardAlumno;
