import React from "react";
import Component from "components/index";

class NameForm extends Component {
  state = {
    value: ""
  };
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleSubmit = event => {
    alert("提交的名字: " + this.state.value);
    event.preventDefault();
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="提交" />
      </form>
    );
  }
}

export default NameForm;
