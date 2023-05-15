import React from 'react';
import { navigate } from 'gatsby';
import * as styles from './ProductCard.module.css';
import { GatsbyImage, getImage, withArtDirection } from 'gatsby-plugin-image'

// import Icon from '../Icons/Icon';
import CurrencyFormatter from '../CurrencyFormatter';

const ProductCard = (props) => {
  // const [isWishlist, setIsWishlist] = useState(false);
  const {
    image,
    imageAlt,
    name,
    price,
    originalPrice,
    meta,
    // showQuickView,
    // height = 580,
    link,
    productCode
  } = props;

  const handleRouteToProduct = () => {
    navigate(`/product/${link||productCode}`);
  };
  
  //cap img fidelity at 2x dpr
  //https://www.andreaverlicchi.eu/capping-image-fidelity-2x-minimize-loading-time/
  let imageSharp = withArtDirection(getImage(image), [
    {
      media: "(max-width: 480px)",
      image: getImage(image),
    },
  ]);
  // console.log('sharp', imageSharp)
  //hacK: no option in gatsby image or plugin sharp
  //so just find and remove part of srcset string https://github.com/gatsbyjs/gatsby/issues/5516#issuecomment-391275541
  
  // if (productCode === 'samshilla-nho-1') {    
  imageSharp.images.sources.forEach((source)=>{
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
  // console.log('capsets', imageSharp)
  // }

  // const handleQuickView = (e) => {
  //   e.stopPropagation();
  //   showQuickView();
  // };

  // const handleFavorite = (e) => {
  //   e.stopPropagation();
  //   setIsWishlist(!isWishlist);
  // };

  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        onClick={() => handleRouteToProduct()}
        role={'presentation'}
      >
        {/* <img style={{ height: `${height}px` }} src={image} alt={imageAlt}></img> */}
        <GatsbyImage image={imageSharp ?? ({
            images: {
              sources: [], fallback: { src: '' }
            }
          })} alt={imageAlt} loading={"eager"} />
        {/* <div
          className={styles.bagContainer}
          role={'presentation'}
          onClick={(e) => handleQuickView(e)}
        >
          <Icon symbol={'bagPlus'} />
        </div> */}
        {/* <div
          className={styles.heartContainer}
          role={'presentation'}
          onClick={(e) => handleFavorite(e)}
        >
          <Icon symbol={'heart'} />
          <div
            className={`${styles.heartFillContainer} ${
              isWishlist === true ? styles.show : styles.hide
            }`}
          >
            <Icon symbol={'heartFill'}></Icon>
          </div>
        </div> */}
      </div>
      <div className={styles.detailsContainer}>
        <span className={styles.productName}>{name}</span>
        <div className={styles.prices}>
          <span
            className={`${originalPrice !== undefined ? styles.salePrice : ''}`}
          >
            <CurrencyFormatter amount={price}></CurrencyFormatter>
          </span>
          {originalPrice && (
            <span className={styles.originalPrice}>
              <CurrencyFormatter amount={originalPrice}></CurrencyFormatter>
            </span>
          )}
        </div>
        <span className={styles.meta}>{meta}</span>
      </div>
    </div>
  );
};

export default ProductCard;
