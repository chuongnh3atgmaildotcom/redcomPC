import { Link, navigate } from 'gatsby';
import React, { useContext, useState, useEffect } from 'react';

import Brand from '../components/Brand';
import CartItem from '../components/CartItem';
import Container from '../components/Container';
import Footer from '../components/Footer';
import Icon from '../components/Icons/Icon';
import OrderSummary from '../components/OrderSummary';

import * as styles from './cart.module.css';
import cartContext from '../context/CartProvider';
import FormInputField from '../components/FormInputField/FormInputField';
import Button from '../components/Button';

const CartPage = (props) => {
  const ctxCart = useContext(cartContext);
  const removeFromCart = ctxCart.removeFromCart;
  const cartItems = ctxCart.cartItems;
  const subTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemList = cartItems.map(item =>
    <CartItem {...item} key={item.productCode} />
  );

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [tel, setTel] = useState('');
  const [note, setNote] = useState('');
  const gaItems = cartItems.map(item => {
    return {
      item_id: item.productCode,
      item_name: item.name,
      item_brand: "SamShilla",
      price: item.originalPrice || item.price,
      discount: item.originalPrice ? (item.originalPrice - item.price) : 0,
      quantity: item.quantity
    }
  })
  useEffect(() => {
    //ga ecommerce view_cart event
    // if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: "view_cart",
        ecommerce: {
          currency: "VND",
          value: subTotal,
          items: gaItems
        }
      });
    // }
  }, [])

  //handle form submission using ajx, so we can include cartitems and clear the cart as well
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const transactionId = (Math.random() + 1).toString(36).substring(7)
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'samshilla-checkout-form',
        'name': name,
        'address': address,
        'tel': tel,
        'email': email,
        'note': note,
        'cart-items': cartItems.map(({ productCode, quantity }) => encode({ [productCode]: quantity })),
        'order-id': new Date().toLocaleString("vi-VN", {
          day: "numeric",
          month: "numeric",
          year: "numeric"
        }) + '-' + transactionId
      })
    }
    // console.log('submit options', options);
    //ga ecommerce purchase event
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: "purchase",
        ecommerce: {
          transaction_id: transactionId,
          value: subTotal,
          currency: "VND",
          items: gaItems
        }
      })
    }
    fetch(
      "/",
      options
    )
      .then(() => {
        cartItems.forEach(({ productCode }) => removeFromCart(productCode));
        navigate('/orderConfirm/')
      })
      .catch((error) => alert(error));
  };

  return (
    <div>
      <div className={styles.contentContainer}>
        <Container size={'large'} spacing={'min'}>
          <div className={styles.headerContainer}>
            <div className={styles.shoppingContainer}>
              <Link className={styles.shopLink} to={'/shop'}>
                <Icon symbol={'arrow'}></Icon>
                <span className={styles.continueShopping}>
                  Continue Shopping
                </span>
              </Link>
            </div>
            <Brand />
            <div className={styles.loginContainer}>
              <Link to={'/login'}>Login</Link>
            </div>
          </div>
          <div className={styles.summaryContainer}>
            <h3>Giỏ hàng</h3>
            <div className={styles.cartContainer}>
              <div className={styles.cartItemsContainer}>
                {
                  cartItemList.length ?
                    (cartItemList) :
                    <Link className={styles.shopLink} to={'/shop'}>
                      <Icon symbol={'arrow'}></Icon>
                      <span className={styles.continueShopping}>
                        No item yet. Start Shopping
                      </span>
                    </Link>
                }
              </div>
              <OrderSummary subTotal={subTotal} />
            </div>
          </div>
          <div className={styles.summaryContainer} id="placeorder-area">
            <h3>Đặt hàng</h3>
            <form
              name="samshilla-checkout-form"
              method="post"
              onSubmit={handleSubmit}
              data-netlify="true"
              netlify-honeypot="phone"
            >
              <input type="hidden" name="form-name" value="samshilla-checkout-form" />
              <div className="hidden">
                <input type="tel" name="phone" />
                <input type="text" name="cart-items" />
                <input type="text" name="order-id" />
              </div>
              <FormInputField icon={'user'} id={'checkout-name'} value={name} placeholder={'Name'}
                name={'name'}
                labelName={'Tên'}
                required={true}
                handleChange={(_, e) => setName(e)}
              />
              <FormInputField icon={'bag'} id={'checkout-address'} value={address} placeholder={'Address'}
                name={'address'}
                labelName={'Địa chỉ'}
                required={true}
                handleChange={(_, e) => setAddress(e)}
              />
              <FormInputField icon={'phone'} type={'tel'} id={'checkout-tel'} value={tel} placeholder={'Tel'}
                name={'tel'}
                labelName={'Số điện thoại'}
                required={true}
                handleChange={(_, e) => setTel(e)}
              />
              <FormInputField icon={'user'} type={'email'} id={'checkout-email'} value={email} placeholder={'Email'}
                name={'email'}
                labelName={'Email'}
                handleChange={(_, e) => setEmail(e)}
              />
              <FormInputField icon={'question'} type={'textarea'} id={'checkout-note'} value={note} placeholder={'Note'}
                name={'note'}
                labelName={'Ghi chú'}
                handleChange={(_, e) => setNote(e)}
              />
              <div>
                <Button
                  type="submit"
                  fullWidth
                  level={'primary'}
                >
                  Đặt hàng
                </Button>
              </div>
            </form>
          </div>
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
