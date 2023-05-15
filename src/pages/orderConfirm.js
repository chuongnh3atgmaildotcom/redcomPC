import React from 'react';
import * as styles from './accountSuccess.module.css';

import ActionCard from '../components/ActionCard';
import Container from '../components/Container';
import Layout from '../components/Layout/Layout';
import { StaticImage } from "gatsby-plugin-image";

const OrderConfirmPage = (props) => {
  return (
    <Layout disablePaddingBottom>
      <Container size={'medium'}>
        <div className={styles.root}>
          <h1>Cảm ơn bạn!</h1>
          <p>
            Chúng tôi đang xử lý đơn của bạn. Chúng tôi sẽ liên lạc với bạn sớm!
          </p>
          <div className={styles.actionContainer}>

            <ActionCard
              title={'Shop'}
              icon={'bag'}
              subtitle={'Tiếp tục mua hàng'}
              link={'/shop'}
            ><StaticImage src="../../static/wait.jpg" aspectRatio={1/1} alt="customer" /></ActionCard>

            <ActionCard
              title={'Policy'}
              icon={'delivery'}
              subtitle={'Chính sách'}
              link={'/support#policy'}
              size={'lg'}
            ><StaticImage src="../../static/shipper.jpg" aspectRatio={1/1} alt="shipper" /></ActionCard>

            <ActionCard
              title={'FAQs'}
              icon={'question'}
              subtitle={'Câu hỏi thường gặp'}
              link={'/faq'}
            />
            
            <ActionCard
              title={'Contact Us'}
              icon={'phone'}
              subtitle={'Liên lạc với chúng tôi'}
              link={'/support#contact'}
            />
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default OrderConfirmPage;
