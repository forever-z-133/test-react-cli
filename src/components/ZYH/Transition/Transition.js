import React from "react";
import Component from "components/index";

// https://github.com/reactjs/react-transition-group/blob/master/src/Transition.js
// https://github.com/chenglou/react-motion
// http://maisano.github.io/react-router-transition/animated-switch

class Transition extends Component {
  prefix = "zyh-transition";
  componentDidUpdate(oldState) {
    const { children: c1 } = oldState;
    const { children: c2 } = this.props;
    console.log(c1.pop(), c2.pop());
  }
  render() {
    const { prefix, classnames, prefixClass } = this;
    const { children, className, ...rest } = this.props;
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} {...rest}>
        {children}
      </div>
    );
  }
}

export default Transition;
