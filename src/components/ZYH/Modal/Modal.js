import React from "react";
import Component from "components/index";

class Modal extends Component {
  render() {
    const { classnames, prefixClass } = this;
    const { children, className, ...rest } = this.props;
    const prefix = "zyh-modal";
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} {...rest}>
        {children}
      </div>
    );
  }
}

export default Modal;
