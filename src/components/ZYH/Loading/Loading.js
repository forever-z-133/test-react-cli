import React from "react";
import Component from "components/index";

class Loading extends Component {
  prefix = "zyh-loading";
  render() {
    const { prefix, classnames, prefixClass } = this;
    const {
      loading,
      children,
      spinner,
      skin = "light",
      text = "loading...",
      className = "",
      ...rest
    } = this.props;
    const classString = classnames(prefixClass(prefix, ["", skin]), className);
    if (!loading) return <>children</>;
    return (
      <div className={classString} {...rest}>
        {children}
        {spinner ? spinner : <div className="zyh-loading-spin">{text}</div>}
      </div>
    );
  }
}

export default Loading;
