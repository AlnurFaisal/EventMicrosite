import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import Events from "../Events/Events";

const MyNav = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/events" components={Events} />
    </div>
  );
};

export default MyNav;
