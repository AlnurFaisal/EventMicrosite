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
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showEvents: false,
      showHome: false,
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.goHome = this.goHome.bind(this);
    this.goEvent = this.goEvent.bind(this);
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
            <h1 className="super">Designing better services for <br /> the people of Singapore</h1>            
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

  goHome() {
    this.setState({
      showHome: !this.state.showHome
    });
  }

  goEvent() {
    this.setState({
      showHome: !this.state.showEvents
    });
  }
}

export default App;
