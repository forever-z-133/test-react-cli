import React from "react";
import { observer } from "mobx-react";
import { isEmpty } from "utils/index";
import app from "mobx/index";

function Logining() {
  return <div className="pos-center">登录中...</div>;
}

function CheckAuth({ withAuth, children }) {
  // 不需要权限的页面
  if (!withAuth) return <>{children}</>;

  // 没权限，先显示登录中，等 mobx 获取 token 后重新走此过程
  if (!app.token) {
    app.getToken();
    return <Logining />;
  }
  if (!app.userInfo || isEmpty(app.userInfo)) {
    app.getUserInfo();
    return <Logining />;
  }

  // 有权限了
  return <>{children}</>;
}

export default observer(CheckAuth);
