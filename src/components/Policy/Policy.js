import React from 'react';
import * as styles from './Policy.module.css';
import { Link } from 'gatsby';

const Policy = (props) => {
  return (
    <div className={styles.root}>
      <section>
        <div className={styles.section} title="order">
          <h3>Đặt hàng</h3>
          <p>
            Quý khách có thể yêu cầu tư vấn và đặt hàng bằng cách:
          </p>
          <ol>
            <li>💬
              <a className={styles.desktopOnly} href="https://www.facebook.com/itssamshilla" target={'_blank'} rel={"noreferrer"}> inbox page</a>
              <a className={styles.mobileOnly} href="http://m.me/101838542835014" target={'_blank'} rel={"noreferrer"}> inbox page</a>.
            </li>
            <li>📞 Trực tiếp qua đt/Zalo: <a href="tel:0329836310">0329836310</a>.</li>
            <li>💻 Qua website <a href="https://www.samshilla.com/">www.samshilla.com</a>.</li>
          </ol>
          <br />
          <p>
            Trước khi ship nhân viên shop sẽ liên hệ với quý khách.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.section} title="shipping">
          <h3>Giao hàng</h3>
          <p>
            Giao hàng toàn quốc. Miễn phí ship trong bán kính 5km từ D’.eldorado 2 Phú thanh - Tây Hồ.
          </p>
          <p>
            Trước khi ship nhân viên shop sẽ liên hệ với quý khách.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.section} title="payment">
          <h3>Thanh toán</h3>
          <p>
            Thanh toán khi nhận hàng. Tiền mặt ✅, chuyển khoản ✅, QR ✅.
          </p>
        </div>
      </section>
      <section>
        <div className={styles.section} title="return">
          <h3>Hỗ trợ & trả hàng</h3>
          <p>
            Vui lòng <Link to={'/support/#contact'}>liên hệ với shop </Link> nếu có bất kỳ vấn đề gì.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Policy;
