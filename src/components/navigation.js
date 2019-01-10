import React, { Component } from "react";
import styles from "./navigation.module.css";
import Link from "gatsby-link";
import Img from "gatsby-image";

class Navigation extends React.Component {

  state = {
    showMenu: false,
    menuStyle: styles.menuBtn,
    mobileNavStyle: styles.mobileHidden,
    navigationMobileStyle: styles.navigationMobileHidden,
    navigationItemMobileStyle: styles.navigationItemMobileHidden
  }

  render() {
    const { logo } = this.props;
    const { showMenu, mobileNavStyle, navigationMobileStyle, navigationItemMobileStyle } = this.state;

    return (
      <div>
        <div className={styles.navigationWrapper}>
          <div>
            <Link to="/">
              <Img
                className={styles.logoImage}
                alt={logo.altText}
                sizes={logo.image.sizes}
              />
            </Link>
          </div>

          <div className={styles.mobileWrapper}>
            <nav role="navigation">
              <ul className={styles.navigation}>
                <li className={styles.navigationItem}>
                  <Link to="/">home</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/blog/">blog</Link>
                </li>
                <li className={styles.navigationItem}>
                  <Link to="/start-here/">start here</Link>
                </li>
              </ul>
            </nav>

            <div
              className={this.state.menuStyle}
              onClick={e => {
                if (!showMenu) {
                  this.setState({menuStyle: styles.close, showMenu: true, mobileNavStyle: styles.mobileShow, navigationMobileStyle: styles.navigationMobile, navigationItemMobileStyle: styles.navigationItemMobile})
                } else {
                  this.setState({menuStyle: styles.menuBtn, showMenu: false, mobileNavStyle: styles.mobileHidden, navigationMobileStyle: styles.navigationMobileHidden, navigationItemMobileStyle: styles.navigationItemMobileHidden})
                }
              }}
            >
              <div className={styles.btnLine} />
              <div className={styles.btnLine} />
              <div className={styles.btnLine} />
            </div>
          </div>
        </div>

        <div className={mobileNavStyle}>
          <nav role="navigation">
            <ul className={navigationMobileStyle}>
              <li className={navigationItemMobileStyle}>
                <Link to="/" onClick={e => {
                  this.setState({menuStyle: styles.menuBtn, showMenu: false, mobileNavStyle: styles.mobileHidden, navigationMobileStyle: styles.navigationMobileHidden, navigationItemMobileStyle: styles.navigationItemMobileHidden})
              }}>home</Link>
              </li>
              <li className={navigationItemMobileStyle}>
                <Link to="/blog/" onClick={e => {
                  this.setState({menuStyle: styles.menuBtn, showMenu: false, mobileNavStyle: styles.mobileHidden, navigationMobileStyle: styles.navigationMobileHidden, navigationItemMobileStyle: styles.navigationItemMobileHidden})
              }}>blog</Link>
              </li>
              <li className={navigationItemMobileStyle}>
                <Link to="/start-here/" onClick={e => {
                  this.setState({menuStyle: styles.menuBtn, showMenu: false, mobileNavStyle: styles.mobileHidden, navigationMobileStyle: styles.navigationMobileHidden, navigationItemMobileStyle: styles.navigationItemMobileHidden})
              }}>start here</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}

export default Navigation;
