import React from 'react';
import { Link } from 'gatsby';

import Button from '../Button';
// import FormInputField from '../FormInputField/FormInputField';
import CurrencyFormatter from '../CurrencyFormatter';

import * as styles from './OrderSummary.module.css';

const OrderSummary = (props) => {
  // const [coupon, setCoupon] = useState('');
  // const [giftCard, setGiftCard] = useState('');
  const { subTotal } = props;

  return (
    <div className={styles.root}>
      <div className={styles.orderSummary}>
        <span className={styles.title}>Chi tiết thanh toán</span>
        <div className={styles.calculationContainer}>
          <div className={styles.labelContainer}>
            <span>Tổng tiền</span>
            <span>
              <CurrencyFormatter amount={subTotal} appendZero />
            </span>
          </div>
          <div className={styles.labelContainer}>
            <span>Miễn phí ship trong bán kính 5km từ D’.eldorado 2 Phú thanh - Tây Hồ. Ngoài khu vực đó shop sẽ liên lạc với bạn nhé</span>
          </div>
          {/* <div className={styles.labelContainer}>
            <span>Tax</span>
            <span>
              <CurrencyFormatter amount={0} appendZero />
            </span>
          </div> */}
        </div>
        {/* <div className={styles.couponContainer}>
          <span>Coupon Code</span>
          <FormInputField
            value={coupon}
            handleChange={(_, coupon) => setCoupon(coupon)}
            id={'couponInput'}
            icon={'arrow'}
          />
          <span>Gift Card</span>
          <FormInputField
            value={giftCard}
            handleChange={(_, giftCard) => setGiftCard(giftCard)}
            id={'couponInput'}
            icon={'arrow'}
          />
        </div> */}
        <div className={styles.totalContainer}>
          <span> Tổng tiền: </span>
          <span>
            <CurrencyFormatter amount={subTotal} appendZero />
          </span>
        </div>
      </div>
      <div className={styles.actionContainer}>
        <Button
          onClick={() => document.getElementById('placeorder-area').scrollIntoView({behavior: "smooth"})}
          fullWidth
          level={'primary'}
        >
          Mời bạn điền thông tin bên dưới để hoàn tất đặt hàng
        </Button>
        <div className={styles.linkContainer}>
          <Link to={'/shop'}>Xem thêm hàng</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
