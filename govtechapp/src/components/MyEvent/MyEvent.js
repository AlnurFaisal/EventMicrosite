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
      eventDates: [],
      selected: false,
      workshops: Workshop(),
      talks: Talk()
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
    //console.log(this.state.eventDates);
    //console.log(this.state.workshops);
    //console.log(this.state.talks);
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
            <Calendar
              months={this.state.months}
              eventDates={this.state.eventDates}
              getWorkshopDetails={this.getWorkshopDetails.bind(this)}
              getTalkDetails={this.getTalkDetails.bind(this)}
              //handleClick={this.handleClick.bind(this)}
            />
          </div>
        </Jumbotron>
      </div>
    );
  }

  /*handleClick(index) {
    // use the index value to identify with index in the eventdates to change the selected value
    let copyEventDates = this.state.eventDates;
    let selectedDate = this.state.eventDates[index];
    selectedDate.selected = true;
    copyEventDates[index] = selectedDate;
    this.setState({
      selected: true,
      eventDates: copyEventDates
    });
  }*/

  getWorkshopDetails(id) {
    const workshops = this.state.workshops;
    const details = {title: null, startTime: null, type: "workshop"};
    let store = null;

    for (let i = 0; i < workshops.length; i++) {
      if (workshops[i].id === id) {
        store = workshops[i].title.substring(0, 12);
        details.title = store;
        details.startTime = workshops[i].startTime
      }
    }
    return details;
  }

  getTalkDetails(id) {
    const talks = this.state.talks;
    const details = {title: null, startTime: null, type: "talk"};
    let store = null;

    for (let i = 0; i < talks.length; i++) {
      if (talks[i].id === id) {
        console.log("I am here!");
        store = talks[i].title.substring(0, 10);
        details.title = store;
        details.startTime = talks[i].startTime;
      }
    }
    return details;
  }

  generateEventDates() {
    const Workshops = this.state.workshops;
    const Talks = this.state.talks;
    let calendarDates = calendarDate(this.state.months[0].may.days);
    // find all workshop/talk events and map using the id to the relavant dates

    for (let i = 0; i < Workshops.length; i++) {
      for (let j = 0; j < calendarDates.length; j++) {
        if (Workshops[i].date === j + 1) {
          calendarDates[j].workshop.push(Workshops[i].id);
        }
      }
    }

    for (let i = 0; i < Talks.length; i++) {
      for (let j = 0; j < calendarDates.length; j++) {
        if (Talks[i].date === j + 1) {
          calendarDates[j].talk.push(Talks[i].id);
        }
      }
    }

    return calendarDates;
  }
}

export default MyEvent;
