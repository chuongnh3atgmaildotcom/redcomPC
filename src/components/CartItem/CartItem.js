import React from 'react';

// import AdjustItem from '../AdjustItem';
import CurrencyFormatter from '../CurrencyFormatter';
// import Drawer from '../Drawer';
import RemoveItem from '../RemoveItem';
// import QuickView from '../QuickView';

import * as styles from './CartItem.module.css';
import { navigate } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const CartItem = (props) => {
  // const [showQuickView, setShowQuickView] = useState(false);
  const { image: { childImageSharp }, alt, name, productCode, price, quantity } = props;
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
      <div className={styles.itemContainer}>
        <span className={styles.name}>{name}</span>
        <span>Số lượng: { quantity }</span>
        {/* <div className={styles.metaContainer}>
          <span>Color: {color}</span>
          <span>Size: {size}</span>
        </div>
        <div
          className={styles.editContainer}
          role={'presentation'}
          onClick={() => setShowQuickView(true)}
        >
          <span>Edit</span>
        </div> */}
      </div>
      <div className={styles.priceContainer}>
        <CurrencyFormatter amount={price*quantity} appendZero />
      </div>
      <div className={styles.removeContainer}>
        <RemoveItem  code={productCode}/>
      </div>
      {/* <Drawer visible={showQuickView} close={() => setShowQuickView(false)}>
        <QuickView product={props} close={() => setShowQuickView(false)} />
      </Drawer> */}
    </div>
  );
};

export default CartItem;
