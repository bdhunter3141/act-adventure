import React from 'react'
import styles from './navigation.module.css'
import Link from 'gatsby-link'
import Img from 'gatsby-image'

export default ({ logo }) => (
  <div className={styles.navigationWrapper}>
  <div>
    <Link to="/">
    <Img className={styles.logoImage} alt={logo.altText} sizes={logo.image.sizes} />
    </Link>
  </div>
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
  </div>
)
