import React from "react";
import { Route } from "react-router-dom";
import Home from "../Home/Home";

const MyNav = () => {
  return (
    <div>
      <Route exact path="/" component={Home} />
    </div>
  );
};

export default MyNav;
