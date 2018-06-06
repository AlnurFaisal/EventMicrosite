import React, { Component } from "react";
import "./square.css";
class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: props.eventDate.selected,
      index: props.eventDate.index,
      workshopIds: props.eventDate.workshop,
      talkIds: props.eventDate.talk,
      colours: { workshop: "#673AB7", talk: "#1976D2" },
      events: []
    };

    this.getWorkshop = this.getWorkshop.bind(this);
    this.getTalk = this.getTalk.bind(this);
    this.miliseconds = this.miliseconds.bind(this);
    this.compare = this.compare.bind(this);
    this.sortEvent = this.sortEvent.bind(this);
  }

  componentWillMount() {
    const events = this.sortEvent();
    if (events) {
      this.setState({
        events: [...events]
      });
    }
  }

  render() {
    console.log(this.getWorkshop());
    console.log(this.getTalk());
    console.log(this.state.workshopIds.length);
    console.log(this.state.events);
    return (
      <div
        className="squareStyle"
        //onClick={this.props.handleClick(this.state.index)}
      >
        <p className={this.state.selected ? "selected" : "notselected"}>
          <strong>{this.props.cDate}</strong>
        </p>
        <br />
        <p>
          {this.state.events.map((elements, i) => {
            return (
              <div>
                <span className={elements.type}>{elements.title}..</span>
                <br />
              </div>
            );
          })}
        </p>
      </div>
    );
  }

  sortEvent() {
    const workshop = this.getWorkshop();
    const talk = this.getTalk();
    if (workshop !== null || talk !== null) {
      let events = [...workshop, ...talk];
      let time, hour, minit;

      for (let i = 0; i < events.length; i++) {
        time = events[i].startTime.split(":");
        hour = time[0];
        minit = time[1];
        events[i].startTime = this.miliseconds(hour, minit);
      }
      events.sort(this.compare);
      return events;
    }
  }

  compare(a, b) {
    const scoreA = a.startTime;
    const scoreB = b.startTime;

    let comparison = 0;
    if (scoreA > scoreB) {
      comparison = 1;
    } else if (scoreA < scoreB) {
      comparison = -1;
    }
    return comparison;
  }

  miliseconds(hrs, min) {
    return (hrs * 60 * 60 + min * 60) * 1000;
  }

  getWorkshop() {
    if (this.state.workshopIds.length === 0) {
      return null;
    }
    const workshopIds = this.state.workshopIds;
    const workshop = [];
    for (let i = 0; i < workshopIds.length; i++) {
      workshop.push(this.props.getWorkshopDetails(workshopIds[i]));
    }
    return workshop;
  }

  getTalk() {
    if (this.state.talkIds.length === 0) {
      return null;
    }
    const talkIds = this.state.talkIds;
    const talk = [];
    for (let i = 0; i < talkIds.length; i++) {
      talk.push(this.props.getTalkDetails(talkIds[i]));
    }
    return talk;
  }
}

export default Square;
