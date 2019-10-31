import React, { Component } from 'react';
import pageCache from 'mobx/pageCache';

class CommonComponent extends Component {
  constructor(props) {
    super(props);
    const compName = this.getCompName();
    const cache = pageCache.get(compName);
    if (cache) {
      this.fromCache = true;
      this.cacheState = { ...cache };
    }
  }
  UNSAFE_componentWillMount() {
    this.setState({ ...this.cacheState });
  }
  componentWillUnmount() {
    const compName = this.getCompName();
    if (this.props.keepAlive) {
      pageCache.add(compName, this.state);
    }
  }
  getCompName() {
    return this.constructor.name;
  }

  render() {
    return (
      <>
        {this.props.children}
      </>
    )
  }
}

export default CommonComponent;