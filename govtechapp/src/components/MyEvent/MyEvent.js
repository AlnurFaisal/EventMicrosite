import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Jumbotron } from "reactstrap";
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
            />
          </div>
        </Jumbotron>
      </div>
    );
  }

  getWorkshopDetails(id) {
    const workshops = this.state.workshops;
    const details = {
      short: null,
      title: null,
      startTime: null,
      type: "workshop",
      time: null,
      speaker: null
    };
    let store = null;

    for (let i = 0; i < workshops.length; i++) {
      if (workshops[i].id === id) {
        store = workshops[i].title.substring(0, 12);
        details.short = store;
        details.startTime = workshops[i].startTime;
        details.time = workshops[i].time;
        details.title = workshops[i].title;
        details.speaker = workshops[i].speaker;
      }
    }
    return details;
  }

  getTalkDetails(id) {
    const talks = this.state.talks;
    const details = {
      short: null,
      title: null,
      startTime: null,
      type: "talk",
      time: null,
      speaker: null
    };
    let store = null;

    for (let i = 0; i < talks.length; i++) {
      if (talks[i].id === id) {
        console.log("I am here!");
        store = talks[i].title.substring(0, 10);
        details.short = store;
        details.startTime = talks[i].startTime;
        details.time = talks[i].time;
        details.title = talks[i].title;
        details.speaker = talks[i].speaker;
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
