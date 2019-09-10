import React, {Component} from "react";

export class AboutUs extends Component {
  render() {
    return (
      <div>
        <section className="page-section bg-primary" id="about">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2 className="text-white mt-0">
                  ¡Tenemos todo lo que usted necesita!
                </h2>
                <hr className="divider light my-4" />
                <p className="text-white-50 mb-4">
                  ¡Sin rodeos, ni plazos forzosos! Usted contar&aacute; con el
                  apoyo necesario con nuestro personal altamente capacitado para
                  sus proyectos
                </p>
                <a
                  className="btn btn-light btn-xl js-scroll-trigger"
                  href="#services"
                >
                  ¡Comenzar!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AboutUs;
