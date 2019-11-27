import React from "react";
import Component from "components/index";

class Divider extends Component {
  prefix = "zyh-divider";
  render() {
    const { prefix, classnames, prefixClass } = this;
    const {
      dashed = false,
      align = "",
      type = "horizontal",
      className = "",
      children,
      ...rest
    } = this.props;
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
    const classString_text = classnames(prefixClass(prefix, ["text"]));

    return (
      <div className={classString} {...rest} role="separator">
        {canWrap && <span className={classString_text}>{children}</span>}
      </div>
    );
  }
}

export default Divider;
