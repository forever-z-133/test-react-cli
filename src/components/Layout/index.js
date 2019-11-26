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

// 没有默认布局的 layout
function NoneLayout(props) {
  return <>{props.children}</>;
}

DefaultLayout.NoneLayout = NoneLayout;
export default DefaultLayout;
