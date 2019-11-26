import React from "react";
import Component from "components/index";

class Notice extends Component {
  render() {
    const { classnames, prefixClass } = this;
    const { children, className, ...rest } = this.props;
    const prefix = "zyh-notice";
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} {...rest}>
        {children}
      </div>
    );
  }
}

export default Notice;
