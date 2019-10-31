import React from 'react';
import Component from 'components/index';
import Router from './Router';
import Layout from './components/Layout';
import PageHeader from 'components/Layout/header';
import PageFooter from 'components/Layout/footer';

import { login, getUser } from 'utils/api';


class App extends Component {
  created() {
    this.login();
  }
  login() {
    (async function () {
      const res = await login({
        client_id: "1",
        client_secret: "EjKXjo27hXenF8a2MgqHvpYv7IhtJ678GfOgnHc5",
        grant_type: "password",
        password: "888888",
        username: "13570240766"
      });
      const { access_token } = res || {};
      if (!access_token) return;
      localStorage.setItem('token', access_token);
      const { data: user } = await getUser() || {};
      console.log(user);
    })();
  }
  render() {
    return (
      <Router render={(MainPage) => (
        <Layout fixedFooter fixedHeader header={<PageHeader />} footer={<PageFooter />}>
          <MainPage />
        </Layout>
      )} />
    );
  }
};

export default App;