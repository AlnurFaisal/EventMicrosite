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
    console.log(this.state.eventDates);
    console.log(this.state.workshops);
    console.log(this.state.talks);
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
              getWorkshopTitle={this.getWorkshopTitle.bind(this)}
              getTalkTitle={this.getTalkTitle.bind(this)}
            />
          </div>
        </Jumbotron>
      </div>
    );
  }

  getWorkshopTitle(id) {
    const workshops = this.state.workshops;

    for (let i = 0; i < workshops.length; i++) {
      if (workshops[i].id === id) {
        return workshops[i].title;
      }
    }
  }

  getTalkTitle(id) {
    const talks = this.state.talks;

    for (let i = 0; i < talks.length; i++) {
      if (talks[i].id === id) {
        return talks[i].title;
      }
    }
  }

  generateEventDates() {
    const Workshops = Workshop();
    const Talks = Talk();
    console.log(Workshops);
    console.log(Talks);
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
