import React from "react";
import Link from "gatsby-link";
import get from "lodash/get";
import Helmet from "react-helmet";
import Hero from "../components/hero";
import SiteBio from "../components/site-bio";
import styles from "./start-here.module.css";

class StartHere extends React.Component {
  render() {
    const siteTitle = get(this, "props.data.site.siteMetadata.title");
    const [headerImage] = get(this, "props.data.allContentfulImage.edges");
    const [siteBio] = get(this, "props.data.allContentfulPerson.edges");
    console.log(siteBio);

    return (
      <div style={{ background: "#fff" }}>
        <Helmet title={siteTitle} />
        <Hero data={headerImage.node} />
        <div className="wrapper">
          <h2 className="section-headline">
            we’re the explorers — the adventurers.
          </h2>
          <p>
            <strong>I’m so glad that you found your way here.</strong>
          </p>
          <p>
            <em>
              If you find yourself stepping out of the movie theatre after
              watching the newest James Bond or Jason Bourne movie, and wishing
              that you were more like them
            </em>{" "}
            <strong>— then you’re in the right place.</strong>
          </p>
          <p>
            <em>
              If you find the routine of work, eat, TV, sleep, rinse, and
              repeat; to be way too unfulfilling for you
            </em>{" "}
            <strong>— then you’re in the right place.</strong>
          </p>
          <p>
            <em>
              If you feel like there must be more to life and you’re worried
              that you’re letting it pass you by… (you guessed it!)
            </em>{" "}
            <strong>— you’re in the right place.</strong>
          </p>
          <SiteBio siteBio={siteBio.node} />
          <p>
            <strong>
              I’ve compiled a list of my top five favourite articles
            </strong>{" "}
            for you to get started with. You can find them below.
          </p>
          <p>
            <strong>Welcome.</strong> Your adventure starts here.
          </p>

          <h2 className="section-headline">my favourite posts</h2>
          <ul>
            <li>
              <Link to="/blog/fake-it-'til-you-make-it">Fake It ‘Til You Make It</Link>
            </li>
            <li>
              <Link to="/blog/antifragility-building-an-immunity">Antifragility: Building an Immunity</Link>
            </li>
            <li>
              <Link to="/blog/poop-lies-and-social-media">Poop, Lies, & Social Media</Link>
            </li>
            <li>
              <Link to="/blog/a-story-of-hate-and-fear">A Story Of Hate & Fear</Link>
            </li>
            <li>
              <Link to="/blog/becoming-your-best-self">Becoming Your Best Self</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default StartHere;

export const pageQuery = graphql`
  query StartHereQuery {
    allContentfulImage(filter: { id: { eq: "c1tuwEEe2WYYkgyEQuoIOMe" } }) {
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
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          title
          shortBio {
            childMarkdownRemark {
              html
            }
          }
          image {
            sizes(
              maxWidth: 480
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
`;
