import React, { Component } from "react";
import "./square.css";
class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      active: props.eventDate.active,
      empty: props.eventDate.empty,
      index: props.index,
      workshopIds: props.eventDate.workshop,
      talkIds: props.eventDate.talk,
      events: []
    };

    this.getWorkshop = this.getWorkshop.bind(this);
    this.getTalk = this.getTalk.bind(this);
    this.miliseconds = this.miliseconds.bind(this);
    this.compare = this.compare.bind(this);
    this.sortEvent = this.sortEvent.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.getEventTitleList = this.getEventTitleList.bind(this);
    this.getEventTimeList = this.getEventTimeList.bind(this);
    this.getEventTypeList = this.getEventTypeList.bind(this);
    this.getEventSpeakerList = this.getEventSpeakerList.bind(this);
  }

  componentWillMount() {
    const events = this.sortEvent();
    if (events) {
      console.log(this.props.eventDate.selected);
      this.setState({
        events: [...events],
        active: true,
        empty: false
      });
    } else {
      this.setState({
        empty: true,
        active: false
      });
    }
  }

  componentWillReceiveProps() {
    this.setState({
      selected: this.props.eventDate.selected
    });
  }



  render() {
    return (
      <div className="squareStyle" onClick={this.handleClick}>
        <p
          id={this.state.active ? "active" : "empty"}
          className={this.state.selected ? "selected" : "notSelected"}
        >
          <strong>{this.props.cDate}</strong>
        </p>
        <br />
        {this.state.events.map((elements, i) => {
          return (
            <div key={i}>
              <span className={elements.type}>{elements.short}..</span>
              <br />
            </div>
          );
        })}
      </div>
    );
  }

  handleClick() {
    if (this.state.active) {
      this.props.toggleSidebar(
        this.props.cDate,
        this.getEventTimeList(),
        this.getEventTitleList(),
        this.getEventTypeList(),
        this.getEventSpeakerList(),
        this.state.index
      );
    } else {
      this.props.toggleSidebar(null, null, null, null, null, null);
    }
  }

  getEventSpeakerList() {
    const copyEvents = this.state.events;
    if (this.state.active) {
      let eventSpeaker = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventSpeaker.push(copyEvents[i].speaker);
      }
      return eventSpeaker;
    }
  }

  getEventTypeList() {
    const copyEvents = this.state.events;
    if (this.state.active) {
      let eventType = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventType.push(copyEvents[i].type);
      }
      return eventType;
    }
  }

  getEventTitleList() {
    const copyEvents = this.state.events;
    if (this.state.active) {
      let eventTitles = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventTitles.push(copyEvents[i].title);
      }
      return eventTitles;
    }
  }

  getEventTimeList() {
    const copyEvents = this.state.events;
    if (this.state.active) {
      let eventTime = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventTime.push(copyEvents[i].time);
      }
      return eventTime;
    }
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
