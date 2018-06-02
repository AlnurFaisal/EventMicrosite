import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import MyEvent from "../MyEvent/MyEvent";

const MyNav = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/events"  component={MyEvent} />
    </div>
  );
};

export default MyNav;
