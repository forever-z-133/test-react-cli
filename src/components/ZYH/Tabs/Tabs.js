import React from "react";
import Component from "components/index";

class Tabs extends Component {
  render() {
    const { classnames, prefixClass } = this;
    const { children, className, ...rest } = this.props;
    const prefix = "zyh-tabs";
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} {...rest}>
        {children}
      </div>
    );
  }
}

export default Tabs;
