import React from 'react';
import * as styles from './shop.module.css';

import Banner from '../components/Banner';
// import CardController from '../components/CardController';
import Container from '../components/Container';
// import Chip from '../components/Chip';
// import Icon from '../components/Icons/Icon';
import Layout from '../components/Layout';
// import LayoutOption from '../components/LayoutOption';
import ProductCardGrid from '../components/ProductCardGrid';
// import Button from '../components/Button';
// import Config from '../config.json';
import { graphql } from 'gatsby';

const IndexPage = ({ data }) => {
  // const [showFilter, setShowFilter] = useState(false);
  const { allProductJson: { nodes: allProducts } } = data
  // console.log('index allProducts', allProducts)
  // useEffect(() => {
  //   window.addEventListener('keydown', escapeHandler);
  //   return () => window.removeEventListener('keydown', escapeHandler);
  // }, []);

  // const escapeHandler = (e) => {
  //   if (e?.keyCode === undefined) return;
  //   if (e.keyCode === 27) setShowFilter(false);
  // };

  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Các sản phẩm của redcomPC`}
          bgImage={'/faqCover.jpg'}
          color={"var(--sale)"}
          height={'350px'}
          primarytextClass={true}
        />
        <Container size={'large'} spacing={'min'}>
          <div className={styles.metaContainer}>
            <h2 className={styles.itemCount}>{allProducts.length ?? 0} sản phẩm</h2>
            {/* <div className={styles.controllerContainer}>
              <div
                className={styles.iconContainer}
                role={'presentation'}
                onClick={() => setShowFilter(!showFilter)}
              >
                <Icon symbol={'filter'} />
                <span>Filters</span>
              </div>
              <div
                className={`${styles.iconContainer} ${styles.sortContainer}`}
              >
                <span>Sort by</span>
                <Icon symbol={'caret'} />
              </div>
            </div> */}
          </div>
          {/* <CardController
            closeFilter={() => setShowFilter(false)}
            visible={showFilter}
            filters={Config.filters}
          /> */}
          {/* <div className={styles.chipsContainer}>
            <Chip name={'XS'} />
            <Chip name={'S'} />
          </div> */}
          <div className={styles.productContainer}>
            <h2 className={styles.mobileItemCount}>{allProducts.length ?? 0} sản phẩm</h2>
            <ProductCardGrid data={allProducts}></ProductCardGrid>
          </div>
          {/* <div className={styles.loadMoreContainer}>
            <span>6 of 456</span>
            <Button fullWidth level={'secondary'}>
              LOAD MORE
            </Button>
          </div> */}
        </Container>
        <Container size={'large'} spacing={'min'}>
          <div style={{ marginTop: "100px", paddingTop: "50px", backgroundColor: "#FCFAF6", borderTop: "1px solid #A9A9A8" }}>
          </div>
        </Container>
      </div>

      {/* <LayoutOption /> */}
    </Layout>
  );
};

export const query = graphql`
  query AllProducts {
    allProductJson {
      nodes {
        ...ProductJsonSummaryFragment
      }
    }
  }
`
export const Head = ({ data }) => {
  return (
    <>
      <title>{"Tất cả sản phẩm của redcomPC"}</title>
      <meta name="description" content="RedcomPC" />
    </>
  );
};

export default IndexPage;
