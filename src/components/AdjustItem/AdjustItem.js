import React, { useState, useRef } from 'react';

import Icon from '../Icons/Icon';
import * as styles from './AdjustItem.module.css';

const AdjustItem = (props) => {
  const { isTransparent } = props;
  const [qty, setQty] = useState(1);
  
  //https://stackoverflow.com/questions/42550341/react-trigger-onchange-if-input-value-is-changing-by-state
  const inputElement = useRef(null);
  const setNativeValue = (element, value) => {
    const num = +value || 0;
    const valueSetter = Object.getOwnPropertyDescriptor(element, 'value').set;
    const prototype = Object.getPrototypeOf(element);
    const prototypeValueSetter = Object.getOwnPropertyDescriptor(prototype, 'value').set;
  
    if (valueSetter && valueSetter !== prototypeValueSetter) {
        prototypeValueSetter.call(element, num);
    } else {
        valueSetter.call(element, num);
    }
  }

  const handleOnChange = (e) => {
    const num = parseInt(e.target.value);
    setQty(num);
    props.setQty(num);
  };

  return (
    <div
      className={`${styles.root} ${
        isTransparent === true ? styles.transparent : ''
      }`}
    >
      <div
        className={styles.iconContainer}
        role={'presentation'}
        onClick={() => {
          if (qty <= 1) return;
          setNativeValue(inputElement.current, qty - 1);
          inputElement.current.dispatchEvent(new Event('change', { bubbles: true }));
        }}
      >
        <Icon symbol={'minus'}></Icon>
      </div>
      <div className={styles.inputContainer}>
        <input
          className={`${isTransparent === true ? styles.transparentInput : ''}`}
          onChange={(e) => handleOnChange(e)}
          type={'number'}
          value={qty}
          ref={inputElement}
        ></input>
      </div>
      <div
        role={'presentation'}
        onClick={() => {
          setNativeValue(inputElement.current, qty + 1);
          inputElement.current.dispatchEvent(new Event('change', { bubbles: true }));
          }}
        className={styles.iconContainer}
      >
        <Icon symbol={'plus'}></Icon>
      </div>
    </div>
  );
};

export default AdjustItem;
