import React from "react";
import Component from "components/index";

class Template extends Component {
  render() {
    const { classnames, prefixClass } = this;
    const { children, className, ...rest } = this.props;
    const prefix = "zyh-template";
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} {...rest}>
        {children}
      </div>
    );
  }
}

export default Template;
