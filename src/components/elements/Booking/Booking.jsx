import React from 'react';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';
import styles from './Booking.module.scss';

function Booking() {
  const sections = ['location', 'your category', 'total person'];

  return (
    <div className={styles.booking}>
      <div className={styles.choice}>
        <div className={styles.wrapper}>
          {sections.map((section) => (
            <div className={styles.section} key={section}>
              <div className={styles.title}>
                <p>{section}</p>
                <GlobalSvgSelector iconId="arrow-vertical" />
              </div>
              <p className={styles.desc}>
                Select
              </p>
            </div>
          ))}
        </div>
      </div>
      <button type="button" className={styles.button}>
        <GlobalSvgSelector iconId="calendar-small" />
        <p>Book Now</p>
      </button>
    </div>
  );
}

export default Booking;
