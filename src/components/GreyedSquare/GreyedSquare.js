import React from "react";
import "./greyedsquare.css";

const GreyedSquare = (props) => (
  <div className="squareGreyed">
    <p className="greyed">
      <strong>{props.cDate}</strong>
    </p>
  </div>
);

export default GreyedSquare;
