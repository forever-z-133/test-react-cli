import React from "react";
import Component from "components/index";
import { Tabs, Transition } from "components/ZYH";

import { observer } from "mobx-react";
import app from "mobx/index";

import logo from "assets/logo.svg";

const { TabPane } = Tabs;

class Home extends Component {
  state = {
    tabs: new Array(30).fill().map((x, i) => i)
  };
  addTab = () => {
    const { tabs } = this.state;
    const newTabs = tabs.concat(tabs.length);
    this.setState({ tabs: newTabs });
  };
  render() {
    const { userInfo } = app;
    const { avatar, uname, tel } = userInfo || {};
    const { tabs } = this.state;

    return (
      <div className="Home">
        <img src={logo} alt="哦豁~" width="50" />
        <header className="flex-row gap-right-10">
          <div className="left ratio" style={{ width: 100 }}>
            <img src={avatar} alt="logo" />
          </div>
          <div className="right grow gap-bottom-5">
            <p>{uname}</p>
            <p>{tel}</p>
          </div>
        </header>
        <main>
          <section>
            <p>mobx 取值</p>
            <button onClick={() => app.state === "" && app.getData()}>
              点击
            </button>
            {app.list.join(",")}
            <span>{app.state}</span>
          </section>
          <section>
            <p>tabs 组件</p>
            <Tabs active="1">
              <TabPane tab="tab 1" name="1">
                1111111111111
              </TabPane>
              <TabPane tab="tab 2" name="2">
                2222222222222222222222
              </TabPane>
            </Tabs>
            <Tabs
              active={0}
              sider={<button onClick={this.addTab}>添加</button>}
            >
              {tabs.map(tab => (
                <TabPane tab={tab} name={tab} key={tab}>
                  {tab}
                </TabPane>
              ))}
            </Tabs>
          </section>
          <section>
            <p>transition 组件</p>
            <Transition className="gap-right-5">
              {tabs.map((tab, index) => <span key={index}>{tab}</span>)}
            </Transition>
          </section>
        </main>
      </div>
    );
  }
}

export default observer(Home);
