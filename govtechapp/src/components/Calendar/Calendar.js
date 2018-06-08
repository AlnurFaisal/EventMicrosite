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
      showSidebar: false,
      sideDate: null,
      sideTime: [],
      sideTitle: [],
      sideType: [],
      sideSpeaker: [],
      dates: []
    };

    this.generateDates = this.generateDates.bind(this);
    this.sidebar = (
      <div className="col-md-3 col-xs-12">
        <Card className={this.state.showSidebar ? "showSide" : "hideSide"}>
          <CardHeader>{this.state.sideDate} May 2018</CardHeader>
          <CardBody>
            {this.state.sideTime.map((element, i) => {
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
    );
  }

  componentWillMount() {
    const generateDates = this.generateDates();
    this.setState({
      dates: generateDates
    });
  }

  render() {
    console.log(this.state.sideDate);
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
                        cDate={element}
                        eventDate={this.props.eventDates[i - currMonthDayValue]}
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
            {this.sidebar}
          </div>
        </div>
      </div>
    );
  }

  toggleSidebar(sideDate, sideTime, sideTitle, sideType, sideSpeaker) {
    this.setState({
      showSidebar: true,
      sideDate: sideDate,
      sideTime: [...sideTime],
      sideTitle: [...sideTitle],
      sideType: [...sideType],
      sideSpeaker: [...sideSpeaker]
    });
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
