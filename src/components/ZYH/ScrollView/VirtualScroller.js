import React from "react";
import Component from "components/index";
// import { divideDataForScroll } from "../utils/index";

class VirtualScroller extends Component {
  prefix = "zyh-virtual-scroller";
  render() {
    const { prefix, classnames, prefixClass, setRef } = this;
    const { children, className, ...rest } = this.props;
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <div className={classString} ref={setRef("$scroller")} {...rest}>
        {children}
      </div>
    );
  }
}

export default VirtualScroller;
