import React from "react";

const Details = props => (
  <div>
    <p>{props.time}</p>
    <p><strong>{props.title}</strong><br />
    <small className="grey"><i>{props.speaker}</i></small></p>
    <br />
  </div>
);

export default Details;
