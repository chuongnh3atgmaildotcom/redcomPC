import React from 'react';

import Slider from '../Slider';

import * as styles from './Gallery.module.css';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'

const Gallery = (props) => {
  const { images, alt } = props;

  const customSliderSettings = {
    slidesToShow: 1,
  };

  const renderImages = () => {
    return images?.map((childImageSharp, index) => {
      //cap img fidelity at 2x dpr
      //https://www.andreaverlicchi.eu/capping-image-fidelity-2x-minimize-loading-time/
      let imageSharp = withArtDirection(getImage(childImageSharp), [
        {
          media: "(max-width: 480px)",
          image: getImage(childImageSharp),
        },
      ]);
      //hacK: no option in gatsby image or plugin sharp
      //so just find and remove part of srcset string https://github.com/gatsbyjs/gatsby/issues/5516#issuecomment-391275541

      // if (productCode === 'samshilla-nho-1') {    
      imageSharp.images.sources.forEach((source) => {
        if (source.media === "(max-width: 480px)") {
          //https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#all-options
          //normal constrained outputPixelDensities would be [0.25,0.5,1,2] so just get rid of 2x output which is the last el
          //since img size is 400, we could make sure 2x ouput is 800w
          //notice: on mobile product is 2 cols so 1x output which is 400w only rendered in ~200w container, so it would look as sharp as 2x fidelity
          let descs = source.srcSet.split(',')
          descs.pop()
          const descString = descs.join(',')
          source.srcSet = descString
        }
      })
      const loadStategy = index === 0 ? "eager" : "lazy"
      return (
        <div key={index} className={styles.imageContainer}>
          {/* <img alt={alt} src={image} /> */}
          <GatsbyImage image={imageSharp ?? ({
            images: {
              sources: [], fallback: { src: '' }
            }
          })} alt={alt} loading={loadStategy} />
        </div>
      );
    });
  };

  return (
    <div className={styles.root}>
      <div className={styles.cardGrid}>
        {images?.map((childImageSharp, index) => {
          const imageSharp = getImage(childImageSharp)
          return (
            <div key={index} className={styles.imageContainer}>
              <GatsbyImage image={imageSharp ?? ({
                images: {
                  sources: [], fallback: { src: '' }
                }
              })} alt={alt} loading={"eager"} />
            </div>
          );
        })}
      </div>
      <div className={styles.mobileSlider}>
        <Slider settings={customSliderSettings}>
          {images && renderImages()}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
