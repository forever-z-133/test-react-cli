import React from 'react';
import Component from 'components/index';
import FormContext from './FormContext';

class Form extends Component {
  validateFields = (fieldNames, options, callback) => {
    if (typeof fieldNames === 'string') { fieldNames = [fieldNames]; } // ('name')
    if (typeof fieldNames === 'object') { callback = options; options = fieldNames; fieldNames = []; } // ({}, func)
    else if (typeof fieldNames === 'function') { callback = fieldNames; fieldNames = []; options = undefined; } // (func)
    else if (typeof options === 'function') { callback = options; options = fieldNames; } // ([], func)
  }
  render() {
    const { rules = {}, children, ...rest } = this.props;
    return (
      <FormContext.Provider value={{ rules }} >
        <form className="zyh-form" {...rest}>
          {children}
        </form>
      </FormContext.Provider>
    );
  }
}

export default Form;