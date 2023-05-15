import React from 'react';
import * as styles from './Hero.module.css';
import Button from '../Button';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image'

const Hero = (props) => {
  const {
    title,
    subtitle,
    ctaText,
    ctaAction,
    maxWidth,
    ctaStyle,
    ctaLink,
    ctaTo,
    header,
  } = props;
  return (
    //https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/#background-images
    <div className={styles.root} style={{ display: "grid" }}>
      <StaticImage
        style={{
          gridArea: "1/1",
          minHeight: "200px"
          
        }}
        // layout="fullWidth"
        aspectRatio={2 / 1}
        src="../../../static/banners/about.jpg"
        alt={"banner"} 
        loading={"eager"}
        />
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          position: "relative",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
        {/* Any content here will be centered in the component */}
        <div className={styles.content} style={{ maxWidth: maxWidth }}>
          {header && <span className={styles.header}>{header}</span>}
          {title && <h2 className={styles.title}>{title}</h2>}
          {subtitle && <span className={styles.subtitle}>{subtitle}</span>}
          {ctaText && (
            <Button
              className={`${styles.ctaButton} ${ctaStyle}`}
              level={'primary'}
              onClick={ctaAction}
            >
              {ctaText}
            </Button>
          )}
          {ctaLink && (
            <Link className={styles.ctaLink} to={ctaTo}>
              {ctaLink}
            </Link>
          )}
        </div>
      </div>


    </div>
  );
};

export default Hero;
