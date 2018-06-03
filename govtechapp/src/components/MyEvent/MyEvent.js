import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Jumbotron, Card, CardHeader, CardBody } from "reactstrap";
import { Workshop, Talk, calendarDate } from "../SeedData/SeedData";
import Calendar from "../Calendar/Calendar";
import "./myevent.css";

class MyEvent extends Component {
  constructor() {
    super();
    this.state = {
      months: [
        {   
          april: { days: 30, startDay: "Sun" },
          may: { days: 31, startDay: "Tue" }
        }
      ],
      calandarDates: []
    };
  }
  render() {
    return (
      <div>
        <NavigationBar />
        <Jumbotron className="jumbo noBorder">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <h1 className="title">Events</h1>
                <p className="grey">
                  Stay updated with our upcoming Talks and Workshops.
                </p>
              </div>
            </div>
            <div className="row calendar">
              <div className="col-md-12 col-sm-12 col-xs-12">
                <h4 className="month">May 2018</h4>
                <br />
                <br />
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default MyEvent;
