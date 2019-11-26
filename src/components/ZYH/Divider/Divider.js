import React from "react";
import Component from "components/index";

class Divider extends Component {
  render() {
    const { classnames, prefixClass } = this;
    const {
      dashed = false,
      align = "",
      type = "horizontal",
      className = "",
      children,
      ...rest
    } = this.props;
    const prefix = "zyh-divider";
    const classString = classnames(
      prefixClass(prefix, ["", align, type]),
      className,
      {
        [`${prefix}-dashed`]: !!dashed
      }
    );
    return (
      <div className={classString} {...rest} role="separator">
        {children && <span className="zyh-divider-text">{children}</span>}
      </div>
    );
  }
}

export default Divider;
