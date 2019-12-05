import React from "react";
import Component from "components/index";
import DragAbled from "../DragAble";
import { animate } from "../utils";

class PullDownRefresh extends Component {
  prefix = "zyh-scroll-view-pullDown";
  state = {
    offset: 0
  };

  // 拖拽事件
  handleDragStart = () => {
    const $el = this.$refs.$drag;
    if ($el.parentNode.scrollTop > 0) return false;
  };
  handleDrag = (now, start, last) => {
    const offset = now.y - start.y;
    this.setState({ offset });
  };
  handleDragEnd = (last, start) => {
    const offset = last.y - start.y;
    animate(offset, 0, 300, {
      every: now => {
        now = Math.max(0, now);
        this.setState({ offset: now });
      }
    });
  };

  Top = ({ offset }) => {
    const max = 100;
    const per = Math.min(offset / max, 1);
    return <p style={{ opacity: per }}>松手进行刷新...</p>;
  };

  render() {
    const { prefix, classnames, prefixClass, setRef } = this;
    const { children, TopElement } = this.props;
    const { offset } = this.state;

    const classString = classnames(prefixClass(prefix, [""]));
    const classString_comp = classnames(prefixClass(prefix, ["comp"]));
    const classString_wrap = classnames(prefixClass(prefix, ["wrap"]));

    return (
      <DragAbled
        className={classString}
        domRef={setRef("$drag")}
        onDrag={this.handleDrag}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
      >
        <div
          className={classString_comp}
          style={{ transform: `translateY(${offset}px)` }}
        >
          {TopElement ? TopElement : <this.Top offset={offset} />}
        </div>
        <div
          className={classString_wrap}
          style={{ transform: `translateY(${offset > 0 ? offset : 0}px)` }}
        >
          {children}
        </div>
      </DragAbled>
    );
  }
}

export default PullDownRefresh;
