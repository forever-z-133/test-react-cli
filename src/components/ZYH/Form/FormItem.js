import React from 'react';
import Component, { withContext } from 'components/index';
import FormContext from './FormContext';

class FormItem extends Component {
  render() {
    const { name, label, rule, getItemProps, getItemError } = this.props;
    return (
      <div className="zyh-form-item" onChange={this.validate}>
        <label className="zyh-form-label">{label}</label>
        <div className="zyh-form-control">
          <input {...getItemProps(name, rule)} />
          <div {...getItemError(name)}></div>
        </div>
      </div>
    );
  }
}

export default withContext(FormItem, FormContext);
