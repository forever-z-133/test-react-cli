import React from "react";
import Layout from "./Layout";
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

function DefaultLayout(props) {
  return (
    <Layout
      fixedFooter
      fixedHeader
      header={<PageHeader />}
      footer={<PageFooter />}
    >
      {props.children}
    </Layout>
  );
}

export default DefaultLayout;
