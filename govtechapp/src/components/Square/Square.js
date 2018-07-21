import React, { Component } from "react";
import { sortEvent } from "../SeedData/SeedData";
import "./square.css";
class Square extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
      selectedDate: props.checkSelectedDate(props.cDate),
      index: props.index,
      events: sortEvent(props.eventDate.workshop, props.eventDate.talk)
    };

    this.handleClick = this.handleClick.bind(this);
    this.getEventTitleList = this.getEventTitleList.bind(this);
    this.getEventTimeList = this.getEventTimeList.bind(this);
    this.getEventTypeList = this.getEventTypeList.bind(this);
    this.getEventSpeakerList = this.getEventSpeakerList.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({
      selected: this.props.eventDate.selected
    });
  }

  render() {
    console.log(this.props.eventDate.selected);
    return (
      <div
        className={
          this.state.selectedDate ? "squareStyleSelected" : "squareStyle"
        }
        onClick={this.handleClick}
      >
        <p
          id={this.state.events ? "active" : "empty"}
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
    if (this.state.events) {
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
    if (copyEvents) {
      let eventSpeaker = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventSpeaker.push(copyEvents[i].speaker);
      }
      return eventSpeaker;
    }
  }

  getEventTypeList() {
    const copyEvents = this.state.events;
    if (copyEvents) {
      let eventType = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventType.push(copyEvents[i].type);
      }
      return eventType;
    }
  }

  getEventTitleList() {
    const copyEvents = this.state.events;
    if (copyEvents) {
      let eventTitles = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventTitles.push(copyEvents[i].title);
      }
      return eventTitles;
    }
  }

  getEventTimeList() {
    const copyEvents = this.state.events;
    if (copyEvents) {
      let eventTime = [];
      for (let i = 0; i < copyEvents.length; i++) {
        eventTime.push(copyEvents[i].time);
      }
      return eventTime;
    }
  }
}

export default Square;
