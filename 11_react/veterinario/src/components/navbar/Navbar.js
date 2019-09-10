import React, {Component} from "react";
import $ from "jquery";
import "./Navbar.css";
import mexFlag from "../../assets/img/mexFlagIco32PX.png";

export class Navbar extends Component {
  componentDidMount() {
    // const navbar = document.getElementById("mainNav");
    // window.onscroll = function() {
    //   "use strict";
    //   if (document.body.scrollTop >= 200) {
    //     myNav.classList.add("navbar-scrolled");
    //     myNav.classList.remove("nav-colored");
    //   } else {
    //     myNav.classList.remove("nav-scrolled");
    //     myNav.classList.add("nav-colored");
    //   }
    // };

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function() {
      $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
      target: "#mainNav",
      offset: 75
    });

    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-scrolled");
      } else {
        $("#mainNav").removeClass("navbar-scrolled");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  }

  render() {
    return (
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-light fixed-top py-3"
          id="mainNav"
        >
          <div className="container">
            <a className="navbar-brand js-scroll-trigger" href="#page-top">
              <img src={mexFlag} alt="mexFlagIco" />
              HIGH DRONE MX
            </a>
            <button
              className="navbar-toggler navbar-toggler-right"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto my-2 my-lg-0">
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#about">
                    Acerca de nosotros
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#services">
                    Servicios
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#portfolio">
                    Nuestros Proyectos
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#Team">
                    Nuestro Equipo
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link js-scroll-trigger" href="#contact">
                    Contactanos
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
