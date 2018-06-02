import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  Jumbotron
} from "reactstrap";
import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
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
        <Jumbotron>
          <div className="container-fluid">
            <h1 className="super">
              Designing better services for <br /> the people of Singapore
            </h1>
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

