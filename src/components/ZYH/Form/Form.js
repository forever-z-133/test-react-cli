import React from 'react';
import Component from 'components/index';

class Form extends Component {
  state = {
    rules: {}
  }
  addRule(key, props) {
    // rules[key]
  }
  render() {
    return (
      <form className="zyh-form">
        {this.props.children}
      </form>
    );
  }
}

export default Form;