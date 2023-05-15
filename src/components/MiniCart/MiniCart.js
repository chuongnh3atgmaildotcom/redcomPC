import { Link, navigate } from 'gatsby';
import React, { useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import MiniCartItem from '../MiniCartItem';
import cartContext from '../../context/CartProvider';

import * as styles from './MiniCart.module.css';

const MiniCart = (props) => {
  const ctxCart = useContext(cartContext);
  const cartItems = ctxCart.cartItems;
  const cartTotal = cartItems.reduce((total,item) => total + (item.price * item.quantity), 0);
  // console.log('minicart first product', firstProduct);
  // if (firstProduct) {
  //   sampleCartItem = {
  //     image: firstProduct.image,
  //     alt: firstProduct.alt,
  //     name: firstProduct.name,
  //     price: firstProduct.price,
  //     color: firstProduct.color,
  //     size: firstProduct.size,
  //   }
  // }
  const miniCartItemList = cartItems.map(item => 
    <MiniCartItem {...item} key={item.productCode} />
  );
  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Giỏ hàng</h4>
      </div>
      <div className={styles.cartItemsContainer}>
        { miniCartItemList }
      </div>
      <div className={styles.summaryContainer}>
        <div className={styles.summaryContent}>
          <div className={styles.totalContainer}>
            <span>Tổng tiền</span>
            <span>
              <CurrencyFormatter amount={cartTotal} appendZero />
            </span>
          </div>
          <Button onClick={() => navigate('/cart')} level={'primary'} fullWidth>
            Thanh toán
          </Button>
          <span className={styles.taxNotes}>
            Phí vận chuyển sẽ được tính khi thanh toán
          </span>
          <div className={styles.linkContainer}>
            <Link to={'/shop'}>Mua thêm món khác</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiniCart;
