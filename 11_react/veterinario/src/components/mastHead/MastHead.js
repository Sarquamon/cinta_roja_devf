import React, {Component} from "react";
import "./MastHead.css";

export class MastHead extends Component {
  render() {
    return (
      <div>
        <header className="masthead">
          <div className="container h-100">
            <div className="row h-100 align-items-center justify-content-center text-center">
              <div className="col-lg-10 align-self-end">
                <h1 className="text-uppercase text-white font-weight-bold">
                  El futuro... reimaginado
                </h1>
                <h2 className="text-uppercase text-white font-weight-bold">
                  High Drone MX
                </h2>
                <hr className="divider my-4" />
              </div>
              <div className="col-lg-8 align-self-baseline">
                <p className="text-white-75 font-weight-light mb-5">
                  ¡Volando hacia el futuro!
                </p>
                <a
                  className="btn btn-primary btn-xl js-scroll-trigger"
                  href="#about"
                >
                  M&aacute;s informaci&oacute;n
                </a>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default MastHead;
