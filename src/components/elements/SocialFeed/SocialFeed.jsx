import React from 'react';

import photo1 from 'assets/images/social-feed/photo1.jpg';
import photo2 from 'assets/images/social-feed/photo2.jpg';
import photo3 from 'assets/images/social-feed/photo3.jpg';
import photo4 from 'assets/images/social-feed/photo4.jpg';
import photo5 from 'assets/images/social-feed/photo5.jpg';

import FuncBtn from 'components/UI/FuncBtn/FuncBtn';

import styles from './SocialFeed.module.scss';

function SocialFeed() {
  const images = [photo1, photo2, photo3, photo4, photo5];

  return (
    <div className={styles.social}>
      <div className={styles.header}>
        <div className="container">
          <div className={styles['text-wrapper']}>
            <p className={`subtitle ${styles.subtitle}`}>Social Feed</p>
            <h2 className="title">Check Our Instagram Profile</h2>
          </div>
          <div className={styles['button-wrapper']}>
            <FuncBtn customClassName={styles.button}>Follow Us</FuncBtn>
          </div>
        </div>
      </div>
      <div className={styles.images}>
        {images.map((image, idx) => (
          <img src={image} alt={`inst-${idx + 1}`} key={`inst-photo-#${idx + 1}`} loading="lazy" />
        ))}
      </div>
    </div>
  );
}

export default SocialFeed;
