import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import { NavLink } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <Grid fluid>
          {/* <nav className="pull-left">
            <ul>
              <li>
                <a href="#pablo">Home</a>
              </li>
              <li>
                <a href="#pablo">Company</a>
              </li>
              <li>
                <a href="#pablo">Portfolio</a>
              </li>
              <li>
                <a href="#pablo">Blog</a>
              </li>
            </ul>
          </nav> */}
          <p className="copyright pull-right">
            &copy; {new Date().getFullYear()}{" "}
            <NavLink
              to="#">
              Inventory App
            </NavLink>
            &nbsp; All Right Reserved.
          </p>
        </Grid>
      </footer>
    );
  }
}

export default Footer;
