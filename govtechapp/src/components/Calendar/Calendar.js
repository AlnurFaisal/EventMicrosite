import React, { Component } from "react";
import { Card, CardHeader, CardBody } from "reactstrap";
import dateFns from "date-fns";
import Square from "../Square/Square";
import GreyedSquare from "../GreyedSquare/GreyedSquare";
import Details from "../Details/Details";
import "./calendar.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: props.currMonth,
      currMonthStart: dateFns.startOfMonth(props.currMonth),
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
    const currMonthDays = dateFns.getDaysInMonth(this.state.currentMonth);
    const currMonthStartDay = dateFns.format(this.state.currMonthStart, "ddd");
    const currMonthDayValue = this.state.dayValue[currMonthStartDay];
    return (
      <div className="row calendar">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h2 className="month">
            <i class="fas fa-arrow-circle-left icon" />{" "}
            {dateFns.format(this.state.currentMonth, "MMMM YYYY")}{" "}
            <i class="fas fa-arrow-circle-right icon" />
          </h2>
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
                    i < currMonthDays + currMonthDayValue &&
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
                  {this.state.sideDate}{" "}{dateFns.format(this.state.currentMonth, "MMMM YYYY")}
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
    const currMonthStartDay = dateFns.format(this.state.currMonthStart, "ddd");
    const currMonthDayValue = this.state.dayValue[currMonthStartDay];
    let eventDates = this.state.eventDates;
    let eventDate = this.state.eventDates[index - currMonthDayValue];
    let prevSelectEventDate = this.state.eventDates[
      this.state.currSelectedIndex - currMonthDayValue
    ];
    if (sideDate === null && this.state.currSelectedIndex) {
      prevSelectEventDate.selected = false;
      eventDates[
        this.state.currSelectedIndex - currMonthDayValue
      ] = prevSelectEventDate;
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
      eventDate.selected = true;
      eventDates[index - currMonthDayValue] = eventDate;
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
        eventDate.selected = true;
        prevSelectEventDate.selected = false;
        eventDates[
          this.state.currSelectedIndex - currMonthDayValue
        ] = prevSelectEventDate;
        eventDates[index - currMonthDayValue] = eventDate;
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
    // use the date-fns module to reduce the lines of code to generate the dates for the calendar component
    const dates = [];
    const { currentMonth, currMonthStart } = this.state;
    const dateFormat = "DD";
    const currMonthEnd = dateFns.endOfMonth(currMonthStart);
    const startDate = dateFns.startOfWeek(currMonthStart);
    const endDate = dateFns.endOfWeek(currMonthEnd);

    let day  = startDate;
    let formattedDate = "";

    while(day <= endDate) {
      formattedDate = dateFns.format(day, dateFormat);
      dates.push(formattedDate);
      day = dateFns.addDays(day, 1);
    }

    return dates;
  }
}

export default Calendar;
