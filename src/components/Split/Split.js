import React from 'react';

import Button from '../Button';
import * as styles from './Split.module.css';
import { StaticImage } from "gatsby-plugin-image"

const Split = (props) => {
  const { alt, title, description, ctaText, cta, bgColor } = props;
  return (
    <div className={styles.root}>
      <div
        className={styles.contentContainer}
        style={{ backgroundColor: bgColor }}
      >
        <div className={styles.detailContainer}>
          <h3>{title}</h3>
          <p>{description}</p>
          <Button className={styles.button} level={'primary'} onClick={cta}>
            {ctaText}
          </Button>
        </div>
      </div>
      <StaticImage alt={alt} src={'../../../static/organic.jpg'} />
    </div>
  );
};

export default Split;
