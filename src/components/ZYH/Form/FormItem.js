import React from 'react';
import Component, { withContext } from 'components/index';
import FormContext from './FormContext';
import { isEmpty } from 'utils';

class FormItem extends Component {
  state = {
    valid: false,
    message: '',
  }
  mounted() {
    console.log(this.props)
  }
  validate = (val) => {
    const str = [val].toString();
    const num = parseFloat(val);
    const { required, minLength, maxLength, min, max, pattern, validator } = this.props;
    if (required === true && isEmpty(val)) {
      this.validated(false, '必填项');
    } else if (pattern instanceof RegExp && pattern.test(val)) {
      this.validated(false, `不满足正则 ${RegExp}`);
    } else if (typeof validator === 'function') {
      validator(val, this.validated);
    } else if (str.length < minLength) {
      this.validated(false, `不得超过 ${minLength} 字符数`);
    } else if (str.length > maxLength) {
      this.validated(false, `不得超过 ${maxLength} 字符数`);
    } else if (num < min) {
      this.validated(false, `请填写大于 ${min} 的数字`);
    } else if (num > max) {
      this.validated(false, `请填写小于 ${max} 的数字`);
    } else {
      this.validated(true);
    }
  }
  validated(valid, message) {
    this.setState({ valid, message });
  }
  render() {
    const { label } = this.props;
    return (
      <div className="zyh-form-item">
        <label className="zyh-form-label">{label}</label>
        <div className="zyh-form-control">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default withContext(FormItem, FormContext);