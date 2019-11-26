import React from "react";
import Component from "components/index";

class Popover extends Component {
  render() {
    const { classnames, prefixClass } = this;
    const { children, className, ...rest } = this.props;
    const prefix = "zyh-popover";
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} {...rest}>
        {children}
      </div>
    );
  }
}

export default Popover;
