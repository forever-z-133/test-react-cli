import React from "react";
import Component from "components/index";
import { Form, Loading, VirtualScroller, Divider } from "components/ZYH/index";

class Login extends Component {
  state = {
    name: "",
    number: 0,
    rules: {
      name: { required: true }
    },
    loading: true
  };
  mounted() {
    setTimeout(() => {
      // this.setState({ loading: false });
    }, 2e3);
  }
  input = key => e => {
    this.setState({ [key]: e.target.value });
  };
  submit() {
    this.$refs.$form.validateFields(valid => {
      console.log(valid);
    });
  }
  render() {
    const { name, number, rules, loading } = this.state;
    return (
      <>
        <Form ref={this.setRef("$form")} rules={rules}>
          <Form.Item label="姓名" prop="name" maxLength={1}>
            <input
              value={name}
              placeholder="请输入..."
              onChange={this.input("name")}
            ></input>
            <span>{name}</span>
          </Form.Item>
        </Form>
        <Form ref={this.setRef("$form2")} rules={{ value: { a: 1 } }}>
          <Form.Item label="年龄" prop="number" number>
            <input
              value={number}
              placeholder="请输入..."
              onChange={this.input("number")}
            ></input>
            <span>{number}</span>
          </Form.Item>
        </Form>
        <div className="gap-bottom-10 margin-top-10">
          <Divider />
          <Divider dashed />
          <div className="gap-right-10">
            <span>1</span>
            <Divider type="vertical" />
            <span>2</span>
            <Divider type="vertical" dashed />
            <span>3</span>
          </div>
          <Divider>中间</Divider>
          <Divider align="left">左边</Divider>
          <Divider align="right">右边</Divider>
        </div>
        <Loading loading={loading}>
          <VirtualScroller
            data={new Array(1e3).fill().map((x, i) => i)}
            style={{ height: 200 }}
          />
        </Loading>
      </>
    );
  }
}

export default Login;
