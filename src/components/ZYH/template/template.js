import React from "react";
import Component from "components/index";

class Template extends Component {
  prefix = "zyh-template";
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

export default Template;
