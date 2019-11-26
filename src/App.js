import React from "react";
import Component from "components/index";
import Router from "router/index";
import DefaultLayout from "./components/Layout";

class App extends Component {
  render() {
    return <Router DefaultLayout={DefaultLayout} />;
  }
}

export default App;
