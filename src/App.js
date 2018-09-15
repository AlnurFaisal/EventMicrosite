import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import MyNav from "./components/MyNav/MyNav";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <MyNav />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
