import React from "react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import styles from "./packing-list-item.module.css";

export default ({ packingListItem }) => (
  <div className={styles.item}>
    <Link to={packingListItem.url}>
      <Img
        className={styles.listImage}
        alt={packingListItem.imageAltText}
        sizes={packingListItem.image.sizes}
      />
    </Link>
    <Link to={packingListItem.url}>
      <h3 className={styles.listTitle}>{packingListItem.name}</h3>
    </Link>
    <p
      dangerouslySetInnerHTML={{
        __html: packingListItem.description.childMarkdownRemark.html
      }}
    />
  </div>
);
