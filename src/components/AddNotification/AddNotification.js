// import { Link } from 'gatsby';
import React, { useContext } from 'react';

import cartContext from '../../context/CartProvider';

import Button from '../Button';
import Icon from '../Icons/Icon';
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './AddNotification.module.css';

const AddNotification = (props) => {
  const ctxCart = useContext(cartContext);
  const showNotif = ctxCart.state?.open;
  const cartItem = ctxCart.state?.lastAddedProduct;
  const cartQty = ctxCart.cartItems?.length ?? 0;
  const imageSharp = getImage(cartItem.image);
  return (
    <div
      className={`${styles.root} ${
        showNotif === true ? styles.show : styles.hide
      }`}
    >
      <div className={styles.header}>
        <div className={styles.iconContainer}>
          <Icon symbol={'check'}></Icon>
        </div>
        <span>Item added to bag</span>
      </div>

      <div className={styles.newItemContainer}>
        <div className={styles.imageContainer}>
          <GatsbyImage image={imageSharp ?? ({
            images: {
              sources: [], fallback: { src: '' }
            }
          })} alt={cartItem.alt ?? ''} />
        </div>
        <div className={styles.detailContainer}>
          <span className={styles.name}>{cartItem.name ?? ''}</span>
          {/* <span className={styles.meta}>Color: {cartItem.color}</span>
          <span className={styles.meta}>Size: {cartItem.size}</span> */}
        </div>
      </div>

      <div className={styles.actionContainer}>
        <Button onClick={props.openCart} level={'secondary'}>
          Xem giỏ hàng ({cartQty})
        </Button>
        <Button level="primary" href="/cart">
          Thanh toán
        </Button>
        {/* <div className={styles.linkContainer}>
          <Link to={'/shop'}>continue shopping</Link>
        </div> */}
      </div>
    </div>
  );
};

export default AddNotification;
