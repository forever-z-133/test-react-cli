import React from 'react';
import Component from 'components/index';
import styles from './index.module.scss';

export default class Layout extends Component {
  render() {
    const { props } = this;
    const { fixedHeader, fixedFooter } = props;
    const fixedType = { fixedHeader, fixedFooter };

    return (
      <>
        {!fixedHeader && !fixedFooter && (
          <div className={this.className(styles["container"], "cover scroller", fixedType)}>
            <div className={this.className(styles["header"])}>{props.header}</div>
            <div className={this.className(styles["body"])}>
              <div className={this.className(styles["content"])}>{props.children}</div>
            </div>
            <div className={this.className(styles["footer"])}>{props.footer}</div>
          </div>
        )}
        {fixedHeader && !fixedFooter && (
          <div className={this.className(styles["container"], "cover flex-col", fixedType)}>
            <div className={this.className(styles["header"])}>{props.header}</div>
            <div className={this.className(styles["body"], "grow scroller")}>
              <div className={this.className(styles["content"])}>{props.children}</div>
              <div className={this.className(styles["footer"])}>{props.footer}</div>
            </div>
          </div>
        )}
        {!fixedHeader && fixedFooter && (
          <div className={this.className(styles["container"], "cover flex-col", fixedType)}>
            <div className={this.className(styles["body"], "grow scroller")}>
              <div className={this.className(styles["header"])}>{props.header}</div>
              <div className={this.className(styles["content"])}>{props.children}</div>
            </div>
            <div className={this.className(styles["footer"])}>{props.footer}</div>
          </div>
        )}
        {fixedHeader && fixedFooter && (
          <div className={this.className(styles["container"], "cover flex-col", fixedType)}>
            <div className={this.className(styles["header"])}>{props.header}</div>
            <div className={this.className(styles["body"], "grow scroller")}>
              <div className={this.className(styles["content"])}>{props.children}</div>
            </div>
            <div className={this.className(styles["footer"])}>{props.footer}</div>
          </div>
        )}
      </>
    )
  }
}