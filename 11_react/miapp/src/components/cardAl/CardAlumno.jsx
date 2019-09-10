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
        <div className="card">
          <h2
            onClick={() => {
              this.props.redirect(this.state.alumno._id);
            }}
            className="card-header"
          >
            {this.state.alumno.nombre}
          </h2>
          <div className="card-body">
            <p className="card-text">{this.state.alumno.carrera}</p>
            <p className="card-text">{this.state.alumno.age}</p>
            <p className="card-text">{this.state.alumno.income}</p>
            <p className="card-text">{this.state.alumno.generation}</p>
            <p className="card-text">{this.state.alumno.currentJob}</p>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default CardAlumno;
