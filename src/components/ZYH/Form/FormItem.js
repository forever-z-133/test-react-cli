import React from 'react';
import Component, { withContext } from 'components/index';
import FormContext from './FormContext';
import { isEmpty } from 'utils';

class FormItem extends Component {
  constructor(props) {
    super(props);
    let {
      prop,
      rules = {},  // 父级而来的规则
      addField
    } = props;
    const {
      required = false,
      number = false,
      minLength = -1,
      maxLength = Infinity,
      min = -Infinity,
      max = Infinity,
      pattern,
      validator,
      rule: meRule
    } = props;
    // 本表单的验证规则
    this.rule = { ...rules[prop], required, number, minLength, maxLength, min, max, pattern, validator, ...meRule };
    // 把验证方法交给父级，让 $ref 可用
    addField(prop, this.validate);
  }
  state = {
    valid: false,
    message: '',
  }
  validate = (e) => ((val) => {
    const str = [val].toString();
    const num = parseFloat(val);
    const { required, number, minLength, maxLength, min, max, pattern, validator } = this.rule;
    if (required === true && isEmpty(val)) {
      this.validated(false, '必填项');
    } else if (str.length < minLength) {
      this.validated(false, `不得超过 ${minLength} 字符数`);
    } else if (str.length > maxLength) {
      this.validated(false, `不得超过 ${maxLength} 字符数`);
    } else if (number && (/[^\-.e0-9]/.test(str) || isNaN(num))) {
      this.validated(false, `请输入正确的数字`);
    } else if (number && num < min) {
      this.validated(false, `请填写大于 ${min} 的数字`);
    } else if (number && num > max) {
      this.validated(false, `请填写小于 ${max} 的数字`);
    } else if (pattern instanceof RegExp && pattern.test(val)) {
      this.validated(false, `不满足正则 ${RegExp}`);
    } else if (typeof validator === 'function') {
      validator(val, this.validated);
    } else {
      this.validated(true);
    }
  })(e.target.value)
  validated(valid, message) {
    this.setState({ valid, message });
  }
  render() {
    const { label } = this.props;
    const { valid, message } = this.state;
    return (
      <div className="zyh-form-item" onChange={this.validate}>
        <label className="zyh-form-label">{label}</label>
        <div className="zyh-form-control">
          {this.props.children}
          {!valid && message}
        </div>
      </div>
    );
  }
}

export default withContext(FormItem, FormContext);