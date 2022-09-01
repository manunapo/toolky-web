/*!

=========================================================
* Black Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";
import { Container } from "reactstrap";
// used for making the prop types of this component
import PropTypes from "prop-types";

const Footer = (props) => {
  return (
    <footer className={"footer" + (props.default ? " footer-default" : "")}>
      <Container fluid={props.fluid ? true : false}>
        <ul className="nav">
          {/* <li className="nav-item">
            <a className="nav-link" href="">

            </a>
          </li>{" "} */}
          {/* <li className="nav-item">
            <a
              className="nav-link"
              href=""
            >
              YouTube
            </a>
          </li>{" "} */}
          <li className="nav-item">
            <a className="nav-link" href="https://www.linkedin.com/in/napolimanuel/" target="_blank" rel="noopener noreferrer" >
              LinkedIn
            </a>
          </li>
        </ul>
        <div className="copyright">
          © {new Date().getFullYear()} hoping you find it useful {" "}
          <i className="tim-icons icon-heart-2" />
        </div>
      </Container>
    </footer>
  );
};

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool,
};

export default Footer;
