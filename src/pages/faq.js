import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

import { graphql } from 'gatsby';

const FaqPage = ({ data }) => {
  // console.log('data', data);
  const { allFaqJson: { nodes } } = data
  // console.log('nodes', nodes);
  const FAQs = nodes.reduce((res, item) => {
    const tag = item.tag ?? 'product';
    res[tag] = (res[tag] ?? []).concat({ 'Q': item.Q, 'A': item.A });
    return res;
  }, { 'product': [] });
  // console.log('faq', FAQs);
  const content = Object.entries(FAQs).map((entry) => {
    const [section, list] = entry
    return (
      <div className={styles.section} key={section}>
        <span><u>{section}</u></span>
        {list.map((item, ind) => {
          return (
            <div className={styles.subSection} key={ind}>
              <h3>{item.Q}</h3>
              <p dangerouslySetInnerHTML={{__html: item.A}}>
              </p>
            </div>
          )
        })}
      </div>
    )
  })
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Câu hỏi thường gặp`}
          bgImage={'/faqCover.jpg'}
          color={"var(--sale)"}
          height={'350px'}
          primarytextClass={true}
        />
        <Container>
          {content}
        </Container>
      </div>
    </Layout>
  );
};

export const Head = ({ data }) => {
  return (
    <>
      <title>{"Câu hỏi thường gặp | RedcomPC"}</title>
      <meta name="description" content="RedcomPC cung cấp những mặt hàng nào? Bạn có giảm giá hoặc khuyến mại không? Đơn đặt hàng của tôi mất bao lâu để đến nơi?..." />
    </>
  );
};

export const faqs = graphql`
query allFaqJson {
  allFaqJson {
    nodes {
      A
      Q
      tag
    }
  }
}`

export default FaqPage;
