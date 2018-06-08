import React from "react";

const Details = props => (
  <div>
    <p>{props.time}</p>
    <p>{props.title}</p>
    <p>{props.speaker}</p>
    <br />
  </div>
);

export default Details;
