import React from 'react';
import Component from 'components/index';
import FormItem from './FormItem';

function FormCreate(options) {
  return function(WrappedComponent) {
    return class extends Component {
      getItemProps = (name, rule) => {
        return {
          onInput(e) {
            const value = e.target.value;
            console.log(value);
          }
        };
      };
      getItemProps = name => {
        return {
          children: ''
        };
      };
      render() {
        const { getItemProps, getItemError } = this;
        const { name, label, rule } = options;
        const form = {
          name,
          label,
          rule,
          getItemProps,
          getItemError
        };
        return <WrappedComponent {...form} />;
      }
    };
  };
}

const FormComponet = FormCreate({
  name: 'username',
  label: '姓名',
  rule: [{ required: true, message: '请输入姓名' }]
})(FormItem);

class Form extends Component {
  render() {
    return <FormComponet />;
  }
}

export default Form;
