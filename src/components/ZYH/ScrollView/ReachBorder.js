import React from "react";
import Component from "components/index";

class ReachBorder extends Component {
  state = {
    upperThreshold: 50,
    lowerThreshold: 50
  };
  mounted() {
    let { upperThreshold, lowerThreshold, threshold } = this.props;
    upperThreshold = upperThreshold || threshold || 50;
    lowerThreshold = lowerThreshold || threshold || 50;
    this.setState({ upperThreshold, lowerThreshold });

    const { addChildScrollEvent } = this.props;
    addChildScrollEvent(this.handleScroller);
  }
  unmounted() {
    const { removeChildScrollEvent } = this.props;
    removeChildScrollEvent(this.handleScroller);
  }
  handleScroller = e => {
    const { upperThreshold, lowerThreshold } = this.state;
    const { scrolltoupper, scrolltolower } = this.props;
    const listHeight = e.target.scrollHeight;
    const wrapHeight = e.target.offsetHeight;
    const scrollTop = e.target.scrollTop;

    // 快到顶部
    if (scrollTop < upperThreshold) {
      scrolltoupper && scrolltoupper();
    }
    
    // 快到底部
    if (scrollTop + wrapHeight > listHeight - lowerThreshold) {
      scrolltolower && scrolltolower();
    }
  };
  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default ReachBorder;
