import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Jumbotron,
  Button
} from "reactstrap";
import "./home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <NavbarBrand>
            <h2>
              <i class="fas fa-door-open" /> Design
            </h2>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>Events</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron className="bannerColor noBorder">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12">
                <h1 className="super">
                  Designing better services for <br /> the people of Singapore
                </h1>
                <br />
                <h4>
                  We are the User Experience Design (UXD) team from Goverment
                  Digital Services, GovTech.
                </h4>
                <br />
                <a href="#">Read more about us</a>
                <br />
                <br />
              </div>
              <div className="col-md-4 col-sm-12 col-xs-12">
                <img
                  src="/img/home-img.png"
                  className="img-fluid"
                  alt="Home-Logo"
                  height="400"
                  width="400"
                />
              </div>
            </div>
          </div>
        </Jumbotron>
        <Jumbotron className="bottom">
          <div class="container-fluid">
            <div class="row">
              <div className="col-md-10 col-sm-12 col-xs-12">
                <h4>
                  <strong>Help us help you</strong>
                </h4>
                <p className="bodyText">
                  We conduct reserach studies to understand how people use
                  digital product and services.<br />
                  Signup if you would like to help make goverment services
                  better.
                </p>
              </div>
              <div className="col-md-2 col-sm-12 col-xs-12">
                <Button color="primary" className="newButton" size="md">Sign Up!</Button>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default Home;
