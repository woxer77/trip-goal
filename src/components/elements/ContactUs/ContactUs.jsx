import React from 'react';

import woman from 'assets/images/contact-us/woman.png';

import FuncBtn from 'components/UI/FuncBtn/FuncBtn';

import styles from './ContactUs.module.scss';

function ContactUs() {
  return (
    <div className={styles.contact} id="contact us">
      <div className="container">
        <div className={styles.content}>
          <div className={styles['text-wrapper']}>
            <p className={`subtitle ${styles.subtitle}`}>
              Contact Us
            </p>
            <h2 className={`title ${styles.title}`}>
              Do You Have Any Questions?
            </h2>
            <FuncBtn>Contact Us</FuncBtn>
          </div>
          <img className={styles.woman} src={woman} alt="woman" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
