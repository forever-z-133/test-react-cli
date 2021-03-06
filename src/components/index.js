import React, { Component, useContext } from "react";
import classnames from "classnames";
import { removeNull } from "utils/index";

const getCacheWhenKeepAlive = Symbol("getCacheWhenKeepAlive");
const setCacheWhenKeepAlive = Symbol("setCacheWhenKeepAlive");

const keepAliveCache = {}; // 当有 keepAlive 时存储数据
const createFlag = {}; // 是否已创建，等于每个组件只会运行一次 created

class CommonComponent extends Component {
  name = this.getCompName();

  /* 重新处理生命周期函数 */
  constructor(props) {
    super(props);
    if (createFlag[this.name]) return;
    createFlag[this.name] = true;
    this.beforeCreate(props);
    this.created();
  }
  componentDidMount() {
    this.beforeMount();
    const _cache = this[getCacheWhenKeepAlive]();
    if (_cache) {
      this.setState({ ..._cache }, () => {
        this.mounted();
      });
    } else {
      this.mounted();
    }
  }
  componentDidUpdate() {
    this.beforeUpdate();
    this.updated();
  }
  componentWillUnmount() {
    this.beforeDestroy();
    this[setCacheWhenKeepAlive]();
    this.destroyed();
  }

  /* 生命周期函数重命名 */
  beforeCreate() {}
  created() {}
  beforeMount() {}
  mounted() {}
  beforeUpdate() {}
  updated() {}
  beforeDestroy() {}
  destroyed() {}

  /* 其他公共方法 */
  classnames = (...args) => {
    const { className } = this.props;
    return classnames.apply(this, args.concat([className]));
  };
  // ('.xb', ['', 'x']) 转为 { 'xb': true, 'xb-x': true }
  prefixClass = (prefix, arr) => {
    if (!arr || !arr.length) return prefix;
    return arr.reduce((re, name) => {
      const concat = prefix && name ? "-" : "";
      re[prefix + concat + name] = true;
      return re;
    }, {});
  };
  style = args => {
    const { style } = this.props;
    return Object.assign({}, args, style);
  };
  getCompName() {
    return this.constructor.name;
  }
  setRef = name => ref => {
    this.$refs = { ...this.$refs, [name]: ref };
  };

  /* keepAlive 情况下，销毁时存储数据 */
  [getCacheWhenKeepAlive]() {
    if (!this.props.keepAlive) return void 0;
    return keepAliveCache[this.name];
  }
  [setCacheWhenKeepAlive]() {
    if (!this.props.keepAlive) return void 0;
    keepAliveCache[this.name] = this.state;
  }
  clearCache() {
    delete keepAliveCache[this.name];
  }
}

export default CommonComponent;

export const withContext = (Component, Context) => {
  return props => {
    let contextProps = useContext(Context);
    removeNull(contextProps);
    return <Component {...props} {...contextProps} />;
  };
};
