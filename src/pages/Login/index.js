import React from 'react';
import Component from 'components/index';
import Form from 'components/ZYH/Form';

class Login extends Component {
  state = {
    name: ''
  }
  created() {
    setTimeout(() => {
      console.log('load');
    });
  }
  input = key => e => {
    this.setState({ [key]: e.target.value });
  }
  destroyed() {
    console.log('destroyed');
  }
  render() {
    const { name } = this.state;
    return (
      <Form model={{ name }}>
        <Form.Item label="姓名" prop="name" required>
          <input value={name} placeholder="请输入..." onChange={this.input('name')}></input>
          <span>{name}</span>
        </Form.Item>
      </Form>
    )
  }
}

export default Login;