import React from 'react';
import Component from 'components/index';
import Form from 'components/ZYH/Form';
import Loading from 'components/ZYH/Loading';

class Login extends Component {
  state = {
    name: '',
    number: 0,
    rules: {
      name: { required: true }
    },
    loading: true
  }
  mounted() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2e3);
  }
  input = key => e => {
    this.setState({ [key]: e.target.value });
  }
  submit() {
    this.$refs.$form.validateFields((valid) => {
      console.log(valid);
    });
  }
  render() {
    const { name, number, rules, loading } = this.state;
    return (
      <Loading loading={loading}>
        <Form ref={this.setRef('$form')} rules={rules}>
          <Form.Item label="姓名" prop="name" maxLength={1}>
            <input value={name} placeholder="请输入..." onChange={this.input('name')}></input>
            <span>{name}</span>
          </Form.Item>
        </Form>
        <Form ref={this.setRef('$form2')} rules={{ value: { a: 1 } }}>
          <Form.Item label="年龄" prop="number" number>
            <input value={number} placeholder="请输入..." onChange={this.input('number')}></input>
            <span>{number}</span>
          </Form.Item>
        </Form>
      </Loading>
    )
  }
}

export default Login;