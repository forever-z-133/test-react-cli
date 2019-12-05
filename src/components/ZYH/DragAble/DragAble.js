import React from "react";
import Component from "components/index";

class DragAble extends Component {
  prefix = "zyh-dragable";

  componentDidMount() {
    window.addEventListener('mousemove', this.handleTouchMove);
    window.addEventListener('touchmove', this.handleTouchMove);
    window.addEventListener('mouseup', this.handleTouchEnd);
    window.addEventListener('touchend', this.handleTouchEnd);
  }
  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleTouchMove);
    window.removeEventListener('touchmove', this.handleTouchMove);
    window.removeEventListener('mouseup', this.handleTouchEnd);
    window.removeEventListener('touchend', this.handleTouchEnd);
  }

  // 绑定拖拽事件
  clicked = false;
  start = { x: 0, y: 0 };
  last = { x: 0, y: 0 };
  handleTouchStart = e => {
    if (!e.touches && e.button !== 0) return; // 必须鼠标左键
    e = e.touches ? e.touches[0] : e;
    this.start = { x: e.clientX, y: e.clientY };
    this.last = this.start;
    const sure = this.handleDragStart(this.last, this.start);
    if (sure === false) return;
    this.clicked = true;
  };
  handleTouchMove = e => {
    if (!this.clicked) return;
    e = e.touches ? e.touches[0] : e;
    const start = this.start;
    const now = { x: e.clientX, y: e.clientY };
    this.handleDrag(now, start, this.last);
    this.last = now;
  };
  handleTouchEnd = e => {
    if (!this.clicked) return;
    this.clicked = false;
    this.handleDragEnd(this.last, this.start);
    this.start = { x: 0, y: 0 };
    this.last = this.start;
  };

  // 拖拽事件的回调
  handleDragStart = (last, start) => {
    const { onDragStart } = this.props;
    return onDragStart && onDragStart(last, start);
  };
  handleDrag = (now, start, last) => {
    const { onDrag } = this.props;
    onDrag && onDrag(now, start, start);
  };
  handleDragEnd = (last, start) => {
    const { onDragEnd } = this.props;
    onDragEnd && onDragEnd(last, start);
  };

  render() {
    const { prefix, classnames, prefixClass } = this;
    const { children, className, domRef, ...rest } = this.props;
    const classString = classnames(prefixClass(prefix, [""]), className);

    delete rest.onDragStart;
    delete rest.onDrag;
    delete rest.onDragEnd;

    return (
      <div
        className={classString}
        onMouseDown={this.handleTouchStart}
        onTouchStart={this.handleTouchStart}
        ref={domRef}
        {...rest}
      >
        {children}
      </div>
    );
  }
}

export default DragAble;
