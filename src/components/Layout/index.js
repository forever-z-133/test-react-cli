import React from 'react';
import Component from 'components/index';
import classnames from 'classnames';
import styles from './index.module.scss';

export default class Layout extends Component {
  render() {
    const { props } = this;
    const { fixedHeader, fixedFooter } = props;
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
}