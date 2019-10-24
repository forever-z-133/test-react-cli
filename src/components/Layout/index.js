import React, { useState } from 'react';
import classnames from 'classnames';
import './index.scss';

function Layout(props) {
  const [fixedHeader] = useState(props.fixedHeader || false);
  const [fixedFooter] = useState(props.fixedFooter || false);
  const fixedType = { fixedHeader, fixedFooter };
  return (
    <>
      {!fixedHeader && !fixedFooter && (
        <div className={classnames("main-container scroller", fixedType)}>
          <div className="header">{props.header}</div>
          <div className="body">
            <div className="content">{props.children}</div>
          </div>
          <div className="footer">{props.footer}</div>
        </div>
      )}
      {fixedHeader && !fixedFooter && (
        <div className={classnames("main-container flex-col", fixedType)}>
          <div className="header">{props.header}</div>
          <div className="body grow scroller">
            <div className="content">{props.children}</div>
            <div className="footer">{props.footer}</div>
          </div>
        </div>
      )}
      {!fixedHeader && fixedFooter && (
        <div className={classnames("main-container flex-col", fixedType)}>
          <div className="body grow scroller">
            <div className="header">{props.header}</div>
            <div className="content">{props.children}</div>
          </div>
          <div className="footer">{props.footer}</div>
        </div>
      )}
      {fixedHeader && fixedFooter && (
        <div className={classnames("main-container flex-col", fixedType)}>
          <div className="header">{props.header}</div>
          <div className="body grow scroller">
            <div className="content">{props.children}</div>
          </div>
          <div className="footer">{props.footer}</div>
        </div>
      )}
    </>
  )
}

export default Layout;