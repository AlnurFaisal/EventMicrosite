import React, { Component } from "react";
import {
  Jumbotron,
  Button
} from "reactstrap";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        <Jumbotron className="banner noBorder">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-8 col-sm-12 col-xs-12">
                <h1 className="super">
                  Designing better services for the people of Singapore
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
        <Jumbotron className="bottom noBorder">
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
}

export default Home;
