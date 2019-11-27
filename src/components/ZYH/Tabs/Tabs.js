import React from "react";
import Component from "components/index";

class Tabs extends Component {
  prefix = "zyh-tabs";
  state = {
    active: this.props.active || 0
  };
  handleClick = key => () => {
    const { active } = this.state;
    const { onChange, onTabClick } = this.props;
    if (onTabClick) onTabClick(key);

    if (active === key) return;

    this.setState({ active: key });
    if (onChange) onChange(key);
  };
  TabItem = item => {
    const { prefix, classnames, prefixClass } = this;
    const { active } = this.state;
    const { tab: Tab, key } = item;
    const classString_tab = classnames(
      prefixClass(prefix, ["tab", active === key ? "tab-active" : ""])
    );
    return (
      <div
        className={classString_tab}
        key={key}
        role="tab"
        onClick={this.handleClick(key)}
      >
        {Tab}
      </div>
    );
  };
  render() {
    const { prefix, classnames, prefixClass } = this;
    const { active } = this.state;
    const { sider, className, ...rest } = this.props;
    let { children } = this.props;
    
    if (!Array.isArray(children)) children = [children];

    const classString = classnames(prefixClass(prefix, [""]), className);
    const classString_nav = classnames(prefixClass(prefix, ["nav"]));
    const classString_wrap = classnames(prefixClass(prefix, ["wrap"]), "grow");
    const classString_side = classnames(prefixClass(prefix, ["side"]));
    const classString_panes = classnames(prefixClass(prefix, ["panes"]));

    const penes = [];
    const tabs = [];
    children.forEach((child, index) => {
      const { name } = child.props;
      let { tab } = child.props;
      if (name === active) penes.push(child);
      if (typeof tab === "string") tab = <>{tab}</>;
      tabs.push({ tab, key: name || index });
    });

    const { TabItem } = this;

    return (
      <div className={classString} {...rest}>
        <div className={classString_nav}>
          <div className={classString_wrap}>{tabs.map(TabItem)}</div>
          <div className={classString_side}>{sider}</div>
        </div>
        <div className={classString_panes}>{penes}</div>
      </div>
    );
  }
}

export default Tabs;
