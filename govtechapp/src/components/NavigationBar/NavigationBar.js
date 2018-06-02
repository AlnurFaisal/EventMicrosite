import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavbarBrand
} from "reactstrap";
import { NavLink } from 'react-router-dom';

const NavigationBar = (props) => (
  <div>
    <Navbar color="white" light expand="md">
      <NavbarBrand>
        <h2>
          <i class="fas fa-door-open" /> Design
        </h2>
      </NavbarBrand>
      <NavbarToggler onClick={props.toggle} />
      <Collapse isOpen={props.isOpen} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/" className="nav-link">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/events" className="nav-link">Events</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

export default NavigationBar;
