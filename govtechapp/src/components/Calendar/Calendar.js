import React, { Component } from "react";
import Square from "../Square/Square";
import "./calendar.css";

class Calendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentMonth: props.months[0].may,
      previousMonth: props.months[0].april,
      dayValue: { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 },
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
    console.log(this.state.dates);
    return (
      <div className="row calendar">
        <div className="col-md-12 col-sm-12 col-xs-12">
          <h4 className="month">May 2018</h4>
          <div className="row">
            <div className="col-md-10 col-xs-12">
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
                  return (
                    <Square
                      index={i}
                      key={i}
                      cDate={element}
                      handleClick={this.props.handleClick}
                      eventDate={null}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
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
        dates[i] = i + 1 - currMonthDayValue;
      }
    }

    return dates;
  }
}

export default Calendar;
