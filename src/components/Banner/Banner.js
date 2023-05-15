import React, { Suspense, lazy } from 'react';
import * as styles from './Banner.module.css';
const FaqCover = lazy(() => import('./FaqCover.js'));
const SupportCover = lazy(() => import('./SupportCover.js'));

const Banner = (props) => {
  const {
    maxWidth,
    name,
    subtitle,
    color,
    bgImage,
    bgColor = 'var(--standard-light-grey)',
    hideSubtitleOnMobile = true,
    primarytextClass
  } = props;

  const customStyling = {
    backgroundColor: bgColor,
    display: "grid",
    // backgroundImage: bgImage !== undefined ? `url(${bgImage})` : 'none',
    // height: height,
    color: color,
  };

  return (
    <div className={styles.root} style={customStyling}>
      {bgImage === '/faqCover.jpg' && (
        <Suspense fallback={''}>
          <FaqCover />
        </Suspense>
      )}
      {bgImage === '/support.jpg' && (
        <Suspense fallback={''}>
          <SupportCover />
        </Suspense>
      )}
      <div className={styles.content} style={{
        maxWidth: maxWidth, gridArea: "1/1",
        position: "relative",
        placeItems: "center",

      }}>
        <h1 className={primarytextClass ? styles.primarytext : null}>{name}</h1>
        {subtitle && (
          <span
            className={`${styles.subtitle} ${hideSubtitleOnMobile === true ? styles.hideSubtitleOnMobile : ''
              }`}
          >
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};

export default Banner;
