import React, { useState, useContext } from 'react';

import Button from '../Button';
import CurrencyFormatter from '../CurrencyFormatter';
import SizeList from '../SizeList';
import SwatchList from '../SwatchList';

import { generateMockProductData } from '../../helpers/mock';
import cartContext from '../../context/CartProvider';

import * as styles from './QuickView.module.css';

const QuickView = (props) => {
  const { close, buttonTitle = 'Add to Bag' } = props;
  const { product } = props;

  const ctxAddItemNotification = useContext(cartContext);
  const showNotification = ctxAddItemNotification.showNotification;
  // const [activeSwatch, setActiveSwatch] = useState(
  //   product.colorOptions[0]
  // );
  // const [activeSize, setActiveSize] = useState(product.sizeOptions[0]);

  // const handleAddToBag = () => {
  //   close();
  //   showNotification();
  // };

  return (
    <div className={styles.root}>
      <div className={styles.titleContainer}>
        <h4>Select Options</h4>
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.productContainer}>
          <span className={styles.productName}>{product.name}</span>
          {/* <div className={styles.price}>
            <CurrencyFormatter amount={product.price}></CurrencyFormatter>
          </div> */}
          <div className={styles.prices}>
            <span
              className={`${product.originalPrice !== undefined ? styles.salePrice : ''}`}
            >
              <CurrencyFormatter amount={product.price}></CurrencyFormatter>
            </span>
            {product.originalPrice && (
              <span className={styles.originalPrice}>
                <CurrencyFormatter amount={product.originalPrice}></CurrencyFormatter>
              </span>
            )}
          </div>
          <div className={styles.productImageContainer}>
            <img alt={product.alt} src={product.image}></img>
          </div>
        </div>

        {/* <div className={styles.sectionContainer}>
          <SwatchList
            swatchList={product.colorOptions}
            activeSwatch={activeSwatch}
            setActiveSwatch={setActiveSwatch}
          />
        </div>

        <div className={styles.sectionContainer}>
          <SizeList
            sizeList={product.sizeOptions}
            activeSize={activeSize}
            setActiveSize={setActiveSize}
          />
        </div> */}

        {/* <Button onClick={() => handleAddToBag()} fullWidth level={'primary'}>
          {buttonTitle}
        </Button> */}
      </div>
    </div>
  );
};

export default QuickView;
