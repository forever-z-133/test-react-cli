import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './index.module.scss';

function Layout(props) {
  const [fixedHeader] = useState(props.fixedHeader || false);
  const [fixedFooter] = useState(props.fixedFooter || false);
  const fixedType = { fixedHeader, fixedFooter };
  return (
    <>
      {!fixedHeader && !fixedFooter && (
        <div className={classnames(styles["container"], "cover scroller", fixedType)}>
          <div className={classnames(styles["header"])}>{props.header}</div>
          <div className={classnames(styles["body"])}>
            <div className={classnames(styles["content"])}>{props.children}</div>
          </div>
          <div className={classnames(styles["footer"])}>{props.footer}</div>
        </div>
      )}
      {fixedHeader && !fixedFooter && (
        <div className={classnames(styles["container"], "cover flex-col", fixedType)}>
          <div className={classnames(styles["header"])}>{props.header}</div>
          <div className={classnames(styles["body"], "grow scroller")}>
            <div className={classnames(styles["content"])}>{props.children}</div>
            <div className={classnames(styles["footer"])}>{props.footer}</div>
          </div>
        </div>
      )}
      {!fixedHeader && fixedFooter && (
        <div className={classnames(styles["container"], "cover flex-col", fixedType)}>
          <div className={classnames(styles["body"], "grow scroller")}>
            <div className={classnames(styles["header"])}>{props.header}</div>
            <div className={classnames(styles["content"])}>{props.children}</div>
          </div>
          <div className={classnames(styles["footer"])}>{props.footer}</div>
        </div>
      )}
      {fixedHeader && fixedFooter && (
        <div className={classnames(styles["container"], "cover flex-col", fixedType)}>
          <div className={classnames(styles["header"])}>{props.header}</div>
          <div className={classnames(styles["body"], "grow scroller")}>
            <div className={classnames(styles["content"])}>{props.children}</div>
          </div>
          <div className={classnames(styles["footer"])}>{props.footer}</div>
        </div>
      )}
    </>
  )
}

export default Layout;