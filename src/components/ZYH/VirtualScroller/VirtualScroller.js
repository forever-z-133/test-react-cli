import React from 'react';
import Component from 'components/index';

class VirtualScroller extends Component {
  mounted() {
    console.log(this.$refs.$scroller);
  }
  render() {
    const { classnames, setRef } = this;
    const { children, className = '', data, ...rest } = this.props;
    return (
      <div 
        className={classnames('zyh-virtual-scroller', className)} 
        ref={setRef('$scroller')} {...rest}>
        {children}
      </div>
    );
  }
}

export default VirtualScroller;