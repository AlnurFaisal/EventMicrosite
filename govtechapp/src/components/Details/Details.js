import React from "react";
import "./details.css";

const Details = props => (
  <div>
    <div>
      <p>{props.time}  <i class={`fas fa-circle ${props.type}dot`}></i>
      <br/>
      <strong>{props.title}</strong><br />
      <small className="grey"><i>{props.speaker}</i></small></p>
      <br />
    </div>
  </div>

);

export default Details;
