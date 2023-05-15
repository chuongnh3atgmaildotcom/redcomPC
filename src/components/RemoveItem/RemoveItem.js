import React, { useContext } from 'react';

import Icon from '../Icons/Icon';

import * as styles from './RemoveItem.module.css';
import CartControlContext from '../../context/CartProvider';

const RemoveItem = (props) => {
  const ctxCart = useContext(CartControlContext);
  // const removeFromCart = ctxCart.removeFromCart;
  const { code: productCode } = props;
  const cartItems = ctxCart.cartItems;
  const removeFromCart = () => {
    //remove
    ctxCart.removeFromCart(productCode)
    //ga ecommerce remove_from_cart event
    const item = cartItems.find(item => item.productCode === productCode)
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: "remove_from_cart",
        ecommerce: {
          currency: "VND",
          value: item.price*item.quantity,
          items: [
            {
              item_id: item.productCode,
              item_name: item.name,
              discount: item.originalPrice ? (item.originalPrice - item.price) : 0,
              item_brand: "Samshilla",
              price: item.originalPrice || item.price,
              quantity: item.quantity
            }
          ]
        }
      })
    }
  }
  return (
    <div className={styles.root}>
      <button onClick={() => removeFromCart()} onKeyDown={() => removeFromCart()}>
        <Icon symbol={'cross'} />
      </button>
    </div>
  );
};

export default RemoveItem;
