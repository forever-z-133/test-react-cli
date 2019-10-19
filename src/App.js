import React from 'react';
import Router from './Router';
import Layout from './components/Layout';

function App() {
  return (
    <Layout fixedFooter fixedHeader header={<p>页首</p>} footer={<p>页尾</p>}>
      <Router />
    </Layout>
  );
}

export default App;