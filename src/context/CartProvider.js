import React, { createContext, useState, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const defaultState = {
  open: false,
  lastAddedProduct: {}
};

export const CartContext = createContext(defaultState);

export const CartProvider = ({ children }) => {
  const [state, setState] = useState(defaultState);
  const [cartItems, setCartItems ] = useLocalStorage('cartItems', []);

  const increaseCartQuantity = (item) => {
    // console.log(state);
    // console.log(setState);
    setCartItems( currItems => {
      //only re render notification when add a product to cart
      if (currItems.find(cartItem => cartItem.productCode === item.productCode) == null) {
        setState({ ...state,  open: true, lastAddedProduct: item});
        return [...currItems, item];
      } else {
        return currItems.map((cartItem) => {
          if (cartItem.productCode === item.productCode) {
            //make sure setState only run once per tick
            //https://stackoverflow.com/questions/45673783/replace-array-entry-with-spread-syntax-in-one-line-of-code
            setState({ ...state,  open: true, lastAddedProduct: item});
            return {...cartItem, quantity: cartItem.quantity + item.quantity};
          } else {
            return cartItem;
          }
        })
      }
    });
  }

  function removeFromCart(productCode) {
    setCartItems(currItems => currItems.filter(item => item.productCode !== productCode));
  }

  const showNotification = () => {
    setState({ ...state, open: true });
  };

  const closeNotification = () => {
    setState({ ...state, open: false });
  };

  useEffect(() => {
    if (state?.open === true) {
      setTimeout(() => {
        closeNotification();
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <CartContext.Provider
      value={{
        state,
        setState,
        showNotification,
        cartItems,
        increaseCartQuantity,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
