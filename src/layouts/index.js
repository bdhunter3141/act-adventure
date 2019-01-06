import React from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import get from 'lodash/get'
import Container from '../components/container'
import Navigation from '../components/navigation'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    const [logo] = get(this, 'props.data.allContentfulImage.edges')
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Navigation logo={logo.node} />
        {children()}
      </Container>
    )
  }
}

export default Template

export const layoutQuery = graphql`
  query LayoutQuery {
    allContentfulImage(filter: { id: { eq: "c1BJmhoZn1e20M8kG8Euus6" } }) {
      edges {
        node {
          name
          altText
          image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`


