import React from "react";
import Component from "components/index";
import { observer } from "mobx-react";
import app from "mobx/index";

// 附件
import logo from "assets/logo.svg";

class Home extends Component {
  throwError = () => {
    throw new Error("xx");
  };
  render() {
    const { userInfo } = app;
    const { avatar, uname, tel } = userInfo || {};
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
          <button onClick={() => app.state === "" && app.getData()}>
            点击
          </button>
          {app.list.join(",")}
          <p>{app.state}</p>
        </main>
        <footer>
          <button onClick={() => this.throwError()}>
            直接报错(无法捕捉事件里的报错，好鸡肋)
          </button>
        </footer>
      </div>
    );
  }
}

export default observer(Home);
