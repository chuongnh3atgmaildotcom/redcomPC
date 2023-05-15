import React from 'react';
// import Button from '../Button';

// import FormInputField from '../FormInputField/FormInputField';

import * as styles from './Contact.module.css';

const Contact = (props) => {
  // const initialState = {
  //   name: '',
  //   phone: '',
  //   email: '',
  //   comment: '',
  // };

  // const [contactForm, setContactForm] = useState(initialState);

  // const handleChange = (id, e) => {
  //   const tempForm = { ...contactForm, [id]: e };
  //   setContactForm(tempForm);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setContactForm(initialState);
  // };

  return (
    <div className={styles.root}>
      <div className={styles.section}>
        <h4>Giờ làm việc</h4>
        <p>
          Chúng tôi sẽ cố gắng trả lời bạn sớm nhất.
        </p>
        <p>Giờ làm việc: Từ thứ hai đến thứ sáu, 8 giờ sáng đến 5 giờ tối</p>
      </div>

      <div className={styles.section}>
        <h4>Thông tin liên lạc</h4>
        <ol>
          <li>D’.eldorado 2 Phú thanh - Tây Hồ.</li>
          <li>💬
            <a className={styles.desktopOnly} href="https://www.facebook.com/itssamshilla" target={'_blank'} rel={"noreferrer"}> inbox page</a>
            <a className={styles.mobileOnly} href="http://m.me/101838542835014" target={'_blank'} rel={"noreferrer"}> inbox page</a>.
          </li>
          <li>📞 Đt/Zalo: <a href="tel:0329836310">0329836310</a>.</li>
        </ol>
      </div>
    </div>
  );
};

export default Contact;
