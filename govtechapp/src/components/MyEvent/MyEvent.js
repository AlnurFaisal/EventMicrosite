import React, { Component } from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Jumbotron } from "reactstrap";
import { calendarDate } from "../SeedData/SeedData";
import Calendar from "../Calendar/Calendar";
import getDaysInMonth from "date-fns/get_days_in_month";
import addMonths from "date-fns/add_months";
import subMonths from "date-fns/sub_months";
import "./myevent.css";

class MyEvent extends Component {
  constructor(props) {
    super();
    this.state = {
      currMonthDates: calendarDate(getDaysInMonth(props.currentMonth)),
      currentMonth: props.currentMonth,
      selectedDate: new Date()
    };
  }

  render() {
    console.log(this.state.currMonthDates);
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
              currMonthDates={this.state.currMonthDates}
              prevMonth={this.prevMonth.bind(this)}
              nextMonth={this.nextMonth.bind(this)}
              currMonth={this.state.currentMonth}
              selectedDate={this.state.selectedDate}
            />
          </div>
        </Jumbotron>
      </div>
    );
  }

  nextMonth() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: addMonths(currentMonth, 1)
    });
  }

  prevMonth() {
    const { currentMonth } = this.state;
    this.setState({
      currentMonth: subMonths(currentMonth, 1)
    });
  }
}

export default MyEvent;
