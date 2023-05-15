import React from 'react';

import { navigate } from 'gatsby';
// import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
import RemoveItem from '../RemoveItem';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import * as styles from './MiniCartItem.module.css';

const MiniCartItem = (props) => {
  const { image: { childImageSharp }, alt, name, price, quantity, productCode } = props;
  const imageSharp = getImage(childImageSharp);
  return (
    <div className={styles.root}>
      <div
        className={styles.imageContainer}
        role={'presentation'}
        onClick={() => navigate(`/product/${productCode}`)}
      >
        <GatsbyImage image={imageSharp ?? ({
            images: {
              sources: [], fallback: { src: '' }
            }
          })} alt={alt} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <span className={styles.name}>{name}</span>
          <span>Số lượng: { quantity }</span>
          <div className={styles.priceContainer}>
            <CurrencyFormatter amount={price*quantity} />
          </div>
          {/* <span className={styles.meta}>Color: {color}</span>
          <span className={styles.meta}>
            Size:
            <span className={styles.size}>{size}</span>
          </span> */}
        </div>
        {/* <div className={styles.adjustItemContainer}>
          { quantity }
        </div> */}
      </div>
      <div className={styles.closeContainer}>
        <RemoveItem code={productCode}/>
      </div>
    </div>
  );
};

export default MiniCartItem;
