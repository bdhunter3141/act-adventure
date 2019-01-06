import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
// import Hero from '../components/hero'
import styles from './start-here.module.css'

class StartHere extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        {/* <Hero data={headerImage.node} /> */}
        <div className="wrapper">
          <h2 className="section-headline">start here</h2>

        </div>
      </div>
    )
  }
}

export default StartHere
