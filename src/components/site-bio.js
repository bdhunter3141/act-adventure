import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import styles from "./site-bio.module.css";

export default ({ siteBio }) => (
  <div className={styles.bio}>
    <Img
      className={styles.profileImage}
      alt="Photo of the site's author."
      sizes={siteBio.image.sizes}
    />
    <div className={styles.bioText}>
      <h2>{siteBio.name}</h2>
      <p
        dangerouslySetInnerHTML={{
          __html: siteBio.shortBio.childMarkdownRemark.html
        }}
      />
    </div>
  </div>
);
