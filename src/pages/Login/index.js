import React, { useState } from 'react';
import Form from 'components/ZYH/Form';

export default function Login() {
  const [ name, setName ] = useState('');
  return (
    <Form model={{ name }}>
      <Form.Item label="姓名" prop="name" required>
        <input value={name} placeholder="请输入..." onChange={e => setName(e.target.value)}></input>
        <span>{name}</span>
      </Form.Item>
    </Form>
  )
}