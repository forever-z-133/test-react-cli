import React from 'react';
import Router from './Router';
import Layout from './components/Layout';

import api from 'utils/api';
const { login, getUser } = api;

(async function() {
  const res = await login({
    client_id: "1",
    client_secret: "EjKXjo27hXenF8a2MgqHvpYv7IhtJ678GfOgnHc5",
    grant_type: "password",
    password: "888888",
    username: "13570240766"
  });
  const { access_token } =  res || {};
  localStorage.setItem('token', access_token);
  const { data: user } = await getUser() || {};
  console.log(user);
})();

function App() {
  return (
    <Layout fixedFooter fixedHeader header={<p>页首</p>} footer={<p>页尾</p>}>
      <Router />
    </Layout>
  );
}

export default App;