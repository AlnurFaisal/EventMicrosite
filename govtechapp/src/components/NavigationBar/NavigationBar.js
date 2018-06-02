import React from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand
} from "reactstrap";

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
            <NavLink>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>Events</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

export default NavigationBar;
