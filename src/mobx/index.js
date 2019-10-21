import { observable, action, decorate } from "mobx";

class AppData {
  list = [];
  state = "";
  getData() {
    if (this.state === 'EMPTY') return;
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
  list: observable,
  state: observable,
  getData: action
});

const app = new AppData();

export default app;
