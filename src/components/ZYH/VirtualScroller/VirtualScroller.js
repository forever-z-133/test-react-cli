import React from "react";
import Component from "components/index";
// import { divideDataForScroll } from "../utils/index";

class VirtualScroller extends Component {
  mounted() {}
  render() {
    const { classnames, setRef } = this;
    const { children, className = "", data, ...rest } = this.props;
    return (
      <div
        className={classnames("zyh-virtual-scroller", className)}
        ref={setRef("$scroller")}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default VirtualScroller;
