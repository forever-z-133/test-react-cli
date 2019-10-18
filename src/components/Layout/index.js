import React from 'react';
import './index.scss';

function Layout(props) {
  console.log(props.children);
  return (
    <div className="main-container">
      <div className="header">
        {props.header}
      </div>
      <div className="body">
        {props.children}
      </div>
      <div className="footer">
        {props.footer}
      </div>
    </div>
  )
}

export default Layout;