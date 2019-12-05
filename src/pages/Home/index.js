import React from "react";
import Component from "components/index";

import MobxLoad from './Section/MobxLoad';
import Tab from './Section/Tab';
import Transition from './Section/Transition';
import Scroller from './Section/Scroller';

import logo from "assets/logo.svg";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <img src={logo} alt="哦豁~" width="50" />
        <main>
          <MobxLoad />
          <Tab />
          <Transition />
          <Scroller />
        </main>
      </div>
    );
  }
}

export default Home;
