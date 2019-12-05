import React from "react";
import Component from "components/index";
import ScrollViewContext from "./ScrollViewContext";

class ScrollerView extends Component {
  prefix = "zyh-scroll-view";
  childScrollEvents = [];
  handleScroll = event => {
    const { onScroll } = this.props;
    onScroll && onScroll(event);
    
    this.childScrollEvents.forEach(func => {
      func && func(event);
    });
  };
  // 让子组件也能接收到 scroll 事件
  addChildScrollEvent = func => {
    this.childScrollEvents.push(func);
  };
  removeChildScrollEvent = func => {
    const { childScrollEvents } = this;
    const index = childScrollEvents.indexOf(func);
    if (index > -1) childScrollEvents.splice(index, 1);
  };
  render() {
    const { prefix, classnames, prefixClass, setRef } = this;
    const { children, className, ...rest } = this.props;
    const { addChildScrollEvent, removeChildScrollEvent } = this;
    const classString = classnames(prefixClass(prefix, [""]), className);
    return (
      <ScrollViewContext.Provider
        value={{ addChildScrollEvent, removeChildScrollEvent }}
      >
        <div
          className={classString}
          ref={setRef("$scroller")}
          onScroll={this.handleScroll}
          {...rest}
          onClick={() => this.setState({ x: Math.random() })}
        >
          {children}
        </div>
      </ScrollViewContext.Provider>
    );
  }
}

export default ScrollerView;
