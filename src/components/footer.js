import React from 'react'
import styles from './footer.module.css'

const year = new Date().getFullYear()

export default () => (
  <div className={styles.footer}>
    © {year} A Call To Adventure. All Rights Reserved.
  </div>
)
