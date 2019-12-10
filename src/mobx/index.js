import { observable, action, decorate } from "mobx";
import { login, getUser } from "api";
import { getLocal, setLocal } from "utils";

class AppData {
  token = getLocal("token") || "";
  userInfo = getLocal("user") || {};
  async getToken() {
    const res = await login({
      client_id: "1",
      client_secret: "EjKXjo27hXenF8a2MgqHvpYv7IhtJ678GfOgnHc5",
      grant_type: "password",
      password: "888888",
      username: "13570240766"
    });
    const { access_token, token_type } = res || {};
    if (!access_token) return;
    const token = `${token_type} ${access_token}`;
    setLocal("token", token);
    this.token = token;
    return token;
  }
  async getUserInfo() {
    const { data: userInfo } = (await getUser()) || {};
    if (!userInfo) return;
    setLocal("user", userInfo);
    this.userInfo = userInfo;
    return userInfo;
  }

  // 测试用的，以后删
  list = [];
  state = "";
  getData() {
    if (this.state === "EMPTY") return;
    this.state = "LOADING";
    setTimeout(() => {
      const newData = new Array(3).fill().map((x, i) => i + 1);
      this.list = this.list.concat(newData);
      if (this.list.length > 10) newData.shift();
      this.state = newData.length < 3 ? "EMPTY" : "";
    }, 1e3);
  }
}

decorate(AppData, {
  token: observable,
  userInfo: observable,
  getToken: action,
  getUserInfo: action,

  // 测试用的，以后删
  list: observable,
  state: observable,
  getData: action
});

export default new AppData();
