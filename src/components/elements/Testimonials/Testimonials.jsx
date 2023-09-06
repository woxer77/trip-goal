import React from 'react';

import map from 'assets/images/testimonials/map.png';
import photo1 from 'assets/images/testimonials/photo1.jpg';
import photo2 from 'assets/images/testimonials/photo2.jpg';
import photo3 from 'assets/images/testimonials/photo3.jpg';
import photo4 from 'assets/images/testimonials/photo4.jpg';
import photo5 from 'assets/images/testimonials/photo5.jpg';
import photo6 from 'assets/images/testimonials/photo6.jpg';
import photo7 from 'assets/images/testimonials/photo7.jpg';
import photo8 from 'assets/images/testimonials/photo8.jpg';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';
import styles from './Testimonials.module.scss';

function Testimonials() {
  return (
    <div className={styles.testimonials} id="testimonials">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={`subtitle ${styles.subtitle}`}>
              Testimonials
            </p>
            <h2 className={`title ${styles.title}`}>
              What Our Customer Say About Us
            </h2>
            <p className={`desc ${styles.desc}`}>
              What customers says about our service and guideline. Customers compliment is most important to upgradation of business service
            </p>
          </div>
          <div className={styles.reviews}>
            <img className={styles.map} src={map} alt="map" loading="lazy" />
            <img className={styles.photo} id={styles.photo1} src={photo1} alt="photo1" loading="lazy" />
            <img className={styles.photo} id={styles.photo2} src={photo2} alt="photo2" loading="lazy" />
            <img className={styles.photo} id={styles.photo3} src={photo3} alt="photo3" loading="lazy" />
            <img className={styles.photo} id={styles.photo4} src={photo4} alt="photo4" loading="lazy" />
            <img className={styles.photo} id={styles.photo5} src={photo5} alt="photo5" loading="lazy" />
            <img className={styles.photo} id={styles.photo6} src={photo6} alt="photo6" loading="lazy" />
            <img className={styles.photo} id={styles.photo7} src={photo7} alt="photo7" loading="lazy" />
            <img className={styles.photo} id={styles.photo8} src={photo8} alt="photo8" loading="lazy" />
            <div className={styles.review}>
              <div className={styles['review-wrapper']}>
                <GlobalSvgSelector iconId="quote" />
                <div className={`desc ${styles['quote-text']}`}>
                  I have traveled and explored several destinations using this platform, no doubt it is highly recommended for traveling because it is comfortable and the service is great.
                </div>
                <div className={styles.author}>
                  Adam L. Brian
                </div>
                <div className={`desc ${styles.hobby}`}>
                  Traveller
                </div>
              </div>
              <div className={styles.slider}>
                <div className={styles['slider-wrapper']}>
                  <div className={`${styles.point} ${styles.inactive}`} />
                  <div className={`${styles.point} ${styles.active}`} />
                  <div className={`${styles.point} ${styles.inactive}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
