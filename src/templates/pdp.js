import React, { useState, useContext, useEffect } from 'react';
import * as styles from './pdp.module.css';

import Accordion from '../components/Accordion';
import AdjustItem from '../components/AdjustItem';
import Button from '../components/Button';
import Breadcrumbs from '../components/Breadcrumbs';
import Container from '../components/Container';
import CurrencyFormatter from '../components/CurrencyFormatter';
import Gallery from '../components/Gallery';
// import SizeList from '../components/SizeList';
import Split from '../components/Split';
// import SwatchList from '../components/SwatchList';
import Layout from '../components/Layout/Layout';

// import { generateSingleProductData, generateMockProductData } from '../../helpers/mock';
// import Icon from '../components/Icons/Icon';
// import ProductCardGrid from '../components/ProductCardGrid';
import { navigate, graphql } from 'gatsby';
import CartControlContext from '../context/CartProvider';
import Markdown from 'markdown-to-jsx';
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { getSrc } from "gatsby-plugin-image"

const ProductPage = ({ data }) => {
  const { productJson: currentProduct } = data
  // const { productCode } = currentProduct;
  const ctxCart = useContext(CartControlContext);
  useEffect(() => {
    //ga ecommerce view_item event
    // if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: "view_item",
        ecommerce: {
          currency: "VND",
          value: currentProduct.price,
          items: [
            {
              item_id: currentProduct.productCode,
              item_name: currentProduct.name,
              item_brand: "SamShilla",
              price: currentProduct.originalPrice || currentProduct.price,
              discount: currentProduct.originalPrice ? (currentProduct.originalPrice - currentProduct.price) : 0,
              quantity: 1
            }
          ]
        }
      });
    // }
  }, [])

  const addToCart = () => {
    //add        
    ctxCart.increaseCartQuantity({ ...currentProduct, quantity: qty })
    //ga ecommerce add_to_cart event
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
      window.dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
          currency: "VND",
          value: currentProduct.price*qty,
          items: [
            {
              item_id: currentProduct.productCode,
              item_name: currentProduct.name,
              discount: currentProduct.originalPrice ? (currentProduct.originalPrice - currentProduct.price) : 0,
              item_brand: "Samshilla",
              price: currentProduct.originalPrice || currentProduct.price,
              quantity: qty
            }
          ]
        }
      })
    }
  };
  // const showNotification = ctxCart.showNotification;

  // const productCode = 'samshilla-be-1';
  // const currentProduct = generateSingleProductData(productCode);
  // console.log(`currentProduct ${productCode}`, currentProduct);
  const [qty, setQty] = useState(1);
  // const [isWishlist, setIsWishlist] = useState(false);
  // const [activeSwatch, setActiveSwatch] = useState(
  //   currentProduct.colorOptions ? currentProduct.colorOptions[0] : null
  // );
  // const [activeSize, setActiveSize] = useState(currentProduct.sizeOptions ? currentProduct.sizeOptions[0] : null);
  // const suggestions = generateMockProductData(4, 'woman');
  return (
    <Layout>
      <div className={styles.root}>
        <Container size={'large'} spacing={'min'}>
          <Breadcrumbs
            crumbs={[
              { link: '/', label: 'Home' },
              // { label: `${currentProduct.tags.join('/')}`, link: `/${currentProduct.tags.join('/')}` },
              { label: `${currentProduct.name}`, link: `/product/${currentProduct.productCode}` },
            ]}
          />
          <div className={styles.content}>
            <div className={styles.gallery}>
              <Gallery images={currentProduct.gallery} alt={currentProduct.alt} />
            </div>
            <div className={styles.details}>
              <h1>{currentProduct.name}</h1>
              {/* <span className={styles.vendor}> by {currentProduct.vendor}</span> */}

              {/* <div className={styles.priceContainer}>
                <CurrencyFormatter appendZero amount={currentProduct.price} />
              </div> */}
              <div className={styles.priceContainer}>
                <span
                  className={`${currentProduct.originalPrice !== undefined ? styles.salePrice : ''}`}
                >
                  <CurrencyFormatter amount={currentProduct.price}></CurrencyFormatter>
                </span>
                {currentProduct.originalPrice && (
                  <span className={styles.originalPrice}>
                    <CurrencyFormatter amount={currentProduct.originalPrice}></CurrencyFormatter>
                  </span>
                )}
              </div>
              {/* {
                currentProduct.colorOptions &&
                <div>

                  <SwatchList
                    swatchList={currentProduct.colorOptions}
                    activeSwatch={activeSwatch}
                    setActiveSwatch={setActiveSwatch}
                  />
                </div>
              }
              {
                currentProduct.sizeOptions &&
                <div className={styles.sizeContainer}>
                  <SizeList
                    sizeList={currentProduct.sizeOptions}
                    activeSize={activeSize}
                    setActiveSize={setActiveSize}
                  />
                </div>
              } */}
              <div className={styles.quantityContainer}>
                <label>
                  Số lượng
                  <AdjustItem qty={qty} setQty={setQty} />
                </label>
              </div>

              <div className={styles.actionContainer}>
                <div className={styles.addToButtonContainer}>
                  <Button
                    onClick={() => { addToCart(); }}
                    fullWidth
                    level={'primary'}
                  >
                    Thêm vào giỏ hàng
                  </Button>
                </div>
                {/* <div
                  className={styles.wishlistActionContainer}
                  role={'presentation'}
                  onClick={() => setIsWishlist(!isWishlist)}
                >
                  <Icon symbol={'heart'}></Icon>
                  <div
                    className={`${styles.heartFillContainer} ${
                      isWishlist === true ? styles.show : styles.hide
                    }`}
                  >
                    <Icon symbol={'heartFill'}></Icon>
                  </div>
                </div> */}
              </div>

              <div className={styles.description}>
                <Markdown>
                  {currentProduct.description}
                </Markdown>
                <span>Mã: {currentProduct.productCode}</span>
              </div>

              <div className={styles.informationContainer}>
                <Accordion
                  type={'plus'}
                  customStyle={styles}
                  title={'Hướng dẫn sử dụng'}
                >
                  <Markdown>
                    {currentProduct.hdsd}
                  </Markdown>
                </Accordion>
                <Accordion type={'plus'} customStyle={styles} title={'Đóng gói và bảo quản'}>
                  <Markdown>
                    {currentProduct.donggoi}
                  </Markdown>
                </Accordion>
              </div>
            </div>
          </div>
          {/* <div className={styles.suggestionContainer}>
            <h2>You may also like</h2>
            <ProductCardGrid
              spacing
              showSlider
              height={400}
              columns={4}
              data={suggestions}
            />
          </div> */}
        </Container>

        <div className={styles.attributeContainer}>
          <Split
            image={'/organic.jpg'}
            alt={'attribute description'}
            title={'Lợi ích của hồng sâm đối với sức khỏe'}
            description={
              'Hồng sâm là nhân sâm tự nhiên, có chất lượng cao và có ích rất lớn đối với sức khỏe của chúng ta.\nNhững lợi ích của nhân sâm bao gồm tăng cường hệ miễn dịch, làm chậm quá trình lão hóa của cơ thể, giúp cơ thể khỏe mạnh và đạt được sự thể hiện sinh lý tốt nhất.'
            }
            ctaText={'Tìm hiểu thêm'}
            cta={() => navigate('/blog')}
            bgColor={'var(--standard-light-grey)'}
          />
        </div>
      </div>
    </Layout>
  );
};

//use different name due to this https://github.com/gatsbyjs/gatsby/issues/26751
export const query = graphql`
  query MyQuery($productCode: String) {
    productJson(productCode: {eq: $productCode}) {
      ...ProductJsonDetailFragment
    }
  }
`
export const Head = ({ data }) => {
  const { productJson: currentProduct } = data
  const { siteUrl } = useSiteMetadata()
  // const imgPath = currentProduct.image.absolutePath.split('static')?.[1] ?? ''
  const imgPath = getSrc(currentProduct.image)
  return (
    <>
      <title>{currentProduct.name + " | Sâm Shilla"}</title>
      <meta name="description" content={currentProduct.short_description} />
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "image": "${siteUrl + imgPath}",
            "url": "${siteUrl + '/product/' + currentProduct.productCode}/",
            "name": "${currentProduct.name}",
            "description": "${currentProduct.short_description}",
            "offers": {
              "@type": "AggregateOffer",
              "highPrice": "${currentProduct.originalPrice || currentProduct.price}",
              "lowPrice": "${currentProduct.price}",
              "priceCurrency": "VND",
              "offerCount": "2",
              "offers": [
                {
                  "@type": "Offer",
                  "eligibleQuantity": "1",
                  "price": "${currentProduct.price}",
                  "priceCurrency": "VND"
                },
                {
                  "@type": "Offer",
                  "eligibleQuantity": "3",
                  "price": "${currentProduct.price}",
                  "priceCurrency": "VND"
                }
              ]
            }
          }
        `}
      </script>
    </>
  );
};

export default ProductPage;
