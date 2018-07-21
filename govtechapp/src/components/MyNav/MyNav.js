import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";
import MyEvent from "../MyEvent/MyEvent";

const MyNav = () => {
  let currentMonth = new Date();
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route
        exact
        path="/events"
        render={() => <MyEvent currentMonth={currentMonth} />}
      />
    </div>
  );
};

export default MyNav;
