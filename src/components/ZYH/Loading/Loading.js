import React from "react";
import Component from "components/index";

class Loading extends Component {
  render() {
    const { classnames } = this;
    const {
      loading,
      children,
      spinner,
      text = "loading...",
      className = "",
      ...rest
    } = this.props;
    if (!loading) return children;
    return (
      <div className={classnames("zyh-loading", className)} {...rest}>
        {children}
        {spinner ? spinner : <div className="zyh-loading-spin">{text}</div>}
      </div>
    );
  }
}

export default Loading;
