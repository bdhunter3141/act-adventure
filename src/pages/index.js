import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import PackingListEntry from '../components/packing-list-item'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [headerImage] = get(this, 'props.data.allContentfulImage.edges')
    const packingListEntries = get(this, 'props.data.allContentfulPackingListEntry.edges')

    return (
      <div style={{ background: '#fff' }}>
        <Helmet title={siteTitle} />
        <Hero data={headerImage.node} />
        <div className="wrapper">
          <h2 className="section-headline">the ultimate packing list for your adventure</h2>
          <ul id="packing-list" className="packing-list-container">
            {packingListEntries.map(({ node }) => {
                return (
                  <li key={node.id}>
                    <PackingListEntry className="packing-list-item" packingListItem={node} />
                  </li>
                )
              })}
          </ul>
          <h2 className="section-headline">recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPackingListEntry(sort: { fields: [orderNumber], order: ASC }) {
      edges {
        node {
          id
          name
          image {
            sizes(maxWidth: 300, maxHeight: 300, resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
          imageAltText
          url
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulImage(filter: { id: { eq: "c1C19XZa00guUCoYoU0qYAE" } }) {
      edges {
        node {
          name
          altText
          heroImage: image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:ffffff"
            ) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`
