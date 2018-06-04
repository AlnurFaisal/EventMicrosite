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
      eventDates: []
    };

    this.generateEventDates = this.generateEventDates.bind(this);
  }

  componentWillMount() {
    const eventDates = this.generateEventDates();
    this.setState({
      eventDates: eventDates
    });
  }

  render() {
    console.log(this.state.eventDates);
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
                <Calendar months={this.state.months} />
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }

  generateEventDates() {
    const Workshops = Workshop();
    const Talks = Talk();
    console.log(Workshops);
    console.log(Talks);
    let calendarDates = calendarDate(this.state.months[0].may.days);
    // find all workshop/talk events and map using the id to the relavant dates
    let Workshops_length = Workshops.length;
    let Talks_length = Talks.length;
    let obj = calendarDates[0];
    for(let i = 0; i < Workshops_length; i++){
      Object.keys(obj).forEach(key => {
        if(Workshops[i].date === parseInt(key)) {
          obj[key].workshop.push(Workshops[i].id);
        }
      });
    }

    for(let i = 0; i < Talks_length; i++){
      Object.keys(obj).forEach(key => {
        if(Talks[i].date === parseInt(key)) {
          obj[key].talk.push(Talks[i].id);
        }
      });
    }
    
    return calendarDates;
  }
  
}

export default MyEvent;
