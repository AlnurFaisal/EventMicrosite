import React, { Component } from "react";
import "./square.css";
class Square extends Component {
  constructor() {
    super();
    this.state = {
      selected: null,
      index: null
    };
  }

  componentWillMount() {
    if (this.props.eventDate) {
      this.setState({
        selected: this.props.eventDate.selected,
        index: this.props.eventDate.index
      });
    }
  }

  render() {
    return (
      <div
        className="squareStyle"
        onClick={this.props.handleClick(this.state.index)}
      >
        <p className={this.state.selected ? "selected" : "notselected"}>
          <strong>{this.props.cDate}</strong>
        </p>
      </div>
    );
  }
}

export default Square;
