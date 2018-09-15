import React, { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand
} from "reactstrap";
import { NavLink } from "react-router-dom";

class NavigationBar extends Component {
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
            <i className="fas fa-door-open" /> Design
          </h2>
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/events" className="nav-link">
                Events
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
}

export default NavigationBar;
