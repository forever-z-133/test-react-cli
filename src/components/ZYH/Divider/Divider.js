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
    // 注1：vertical 下不支持 dashed
    // 注2：vertical 下不支持内容
    const canWrap = !!children && type !== "vertical";
    const classString = classnames(
      prefixClass(prefix, ["", align, canWrap ? "wrap" : type]),
      className,
      {
        [`${prefix}-dashed`]: !!dashed && !canWrap
      }
    );
    return (
      <div className={classString} {...rest} role="separator">
        {canWrap && <span className="zyh-divider-text">{children}</span>}
      </div>
    );
  }
}

export default Divider;
