import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import Square from "../Square/Square";
import GreyedSquare from "../GreyedSquare/GreyedSquare";
import Details from "../Details/Details";
import "./calendar.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: props.months[0].may,
      previousMonth: props.months[0].april,
      dayValue: { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 },
      currSelectedIndex: null,
      eventDates: props.eventDates,
      showSidebar: false,
      sideDate: null,
      sideTime: [],
      sideTitle: [],
      sideType: [],
      sideSpeaker: [],
      dates: []
    };

    this.generateDates = this.generateDates.bind(this);
  }

  componentWillMount() {
    const generateDates = this.generateDates();
    this.setState({
      dates: generateDates
    });
  }

  render() {
    const currMonthStartDay = this.state.currentMonth.startDay;
    const currMonthDayValue = this.state.dayValue[currMonthStartDay];
    return (
      <div className="row calendar">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h4 className="month">May 2018</h4>
          <div className="row">
            <div className="col-md-9 col-xs-12">
              <div className="calendar-grid">
                <div className="day">
                  <p>
                    <strong>Sun</strong>
                  </p>
                </div>
                <div className="day">
                  <p>
                    <strong>Mon</strong>
                  </p>
                </div>
                <div className="day">
                  <p>
                    <strong>Tue</strong>
                  </p>
                </div>
                <div className="day">
                  <p>
                    <strong>Wed</strong>
                  </p>
                </div>
                <div className="day">
                  <p>
                    <strong>Thu</strong>
                  </p>
                </div>
                <div className="day">
                  <p>
                    <strong>Fri</strong>
                  </p>
                </div>
                <div className="day">
                  <p>
                    <strong>Sat</strong>
                  </p>
                </div>
                {this.state.dates.map((element, i) => {
                  if (
                    i < this.state.currentMonth.days + currMonthDayValue &&
                    i >= currMonthDayValue
                  ) {
                    return (
                      <Square
                        key={i}
                        index={i}
                        cDate={element}
                        eventDate={this.state.eventDates[i - currMonthDayValue]}
                        getWorkshopDetails={this.props.getWorkshopDetails}
                        getTalkDetails={this.props.getTalkDetails}
                        toggleSidebar={this.toggleSidebar.bind(this)}
                      />
                    );
                  } else {
                    return <GreyedSquare index={i} key={i} cDate={element} />;
                  }
                })}
                <br />
                Workshop<span className="dot workshop_dot" />
                <br />
                <span className="talk_text">Talk</span>
                <span className="dot talk_dot" />
              </div>
            </div>
            <div className="col-md-3 col-xs-12 sidebar">
              <Card
                className={this.state.showSidebar ? "showSide" : "hideSide"}
              >
                <CardHeader className="sidebar_header">
                  {this.state.sideDate} May 2018
                </CardHeader>
                <CardBody className="sidebar_body">
                  {this.state.sideTime &&
                    this.state.sideTime.map((element, i) => {
                      return (
                        <Details
                          key={i}
                          time={element}
                          title={this.state.sideTitle[i]}
                          type={this.state.sideType[i]}
                          speaker={this.state.sideSpeaker[i]}
                        />
                      );
                    })}
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  toggleSidebar(sideDate, sideTime, sideTitle, sideType, sideSpeaker, index) {
    const currMonthStartDay = this.state.currentMonth.startDay;
    const currMonthDayValue = this.state.dayValue[currMonthStartDay];
    let eventDates = this.state.eventDates;
    let eventDate = this.state.eventDates[index - currMonthDayValue];
    let prevSelectEventDate = this.state.eventDates[
      this.state.currSelectedIndex - currMonthDayValue
    ];
    if (sideDate === null && this.state.currSelectedIndex) {
      console.log(prevSelectEventDate);
      prevSelectEventDate.selected = false;
      console.log(prevSelectEventDate);
      eventDates[
        this.state.currSelectedIndex - currMonthDayValue
      ] = prevSelectEventDate;
      console.log(eventDates);
      this.setState({
        showSidebar: false,
        sideDate: sideDate,
        sideTime: sideTime,
        sideTitle: sideTitle,
        sideType: sideType,
        sideSpeaker: sideSpeaker,
        eventDates: eventDates,
        currSelectedIndex: null
      });
    } else if (sideDate === null && !this.state.currSelectedIndex) {
      this.setState({
        showSidebar: false,
        sideDate: sideDate,
        sideTime: sideTime,
        sideTitle: sideTitle,
        sideType: sideType,
        sideSpeaker: sideSpeaker
      });
    } else if (sideDate && !this.state.currSelectedIndex) {
      console.log(eventDate);
      eventDate.selected = true;
      console.log(eventDate);
      eventDates[index - currMonthDayValue] = eventDate;
      console.log(eventDates);
      this.setState({
        showSidebar: true,
        sideDate: sideDate,
        sideTime: [...sideTime],
        sideTitle: [...sideTitle],
        sideType: [...sideType],
        sideSpeaker: [...sideSpeaker],
        eventDates: eventDates,
        currSelectedIndex: index
      });
    } else {
      if (this.state.currSelectedIndex !== index) {
        console.log(eventDate);
        eventDate.selected = true;
        prevSelectEventDate.selected = false;
        console.log(eventDate);
        eventDates[
          this.state.currSelectedIndex - currMonthDayValue
        ] = prevSelectEventDate;
        eventDates[index - currMonthDayValue] = eventDate;
        console.log(eventDates);
        this.setState({
          showSidebar: true,
          sideDate: sideDate,
          sideTime: [...sideTime],
          sideTitle: [...sideTitle],
          sideType: [...sideType],
          sideSpeaker: [...sideSpeaker],
          eventDates: eventDates,
          currSelectedIndex: index
        });
      }
    }
  }

  generateDates() {
    const dates = [];
    const currMonthStartDay = this.state.currentMonth.startDay;
    const currMonthDayValue = this.state.dayValue[currMonthStartDay];
    const previousMonthDays = this.state.previousMonth.days;
    const currMonthDays = this.state.currentMonth.days;
    let j = currMonthDayValue - 1;
    let nextMonthDate = 1;

    for (let i = 0; i < 35; i++) {
      if (i < currMonthDayValue) {
        console.log("Here!");
        dates[i] = previousMonthDays - j;
        j--;
      } else if (i > currMonthDays + 1) {
        dates[i] = nextMonthDate;
        nextMonthDate++;
      } else {
        console.log("Now Here!");
        dates[i] =
          i + 1 - currMonthDayValue < 10
            ? "0" + (i + 1 - currMonthDayValue)
            : i + 1 - currMonthDayValue;
      }
    }

    return dates;
  }
}

export default Calendar;
