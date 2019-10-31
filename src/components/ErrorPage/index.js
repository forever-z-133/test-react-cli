import React from 'react';
import Component from 'components/index';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  /**
   * 注意，错误边界无法捕获以下场景中产生的错误：
   * 1. 事件处理（了解更多）
   * 2. 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
   * 3. 服务端渲染
   * 4. 它自身抛出来的错误（并非它的子组件）
  */
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <p className="pos-center">页面出错啦，请联系管理员！</p>
      );
    }
    return this.props.children;
  }
}

export default ErrorPage;