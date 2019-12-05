import React from "react";
import { observer } from "mobx-react";
import app from "mobx/index";

export default observer(function() {
  const { userInfo } = app;
  const { avatar, uname, tel } = userInfo || {};

  return (
    <section>
      <p>mobx 取值</p>
      <header className="flex-row gap-right-10">
        <div className="left ratio" style={{ width: 100 }}>
          <img src={avatar} alt="logo" />
        </div>
        <div className="right grow gap-bottom-5">
          <p>{uname}</p>
          <p>{tel}</p>
        </div>
      </header>
      <section>
        <button onClick={() => app.state === "" && app.getData()}>点击</button>
        {app.list.join(",")}
        <span>{app.state}</span>
      </section>
      <hr />
    </section>
  );
});
