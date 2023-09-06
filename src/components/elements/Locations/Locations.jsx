import React from 'react';

import image1 from 'assets/images/locations/image1.jpg';
import image2 from 'assets/images/locations/image2.jpg';
import image3 from 'assets/images/locations/image3.jpg';

import styles from 'components/elements/Locations/Locations.module.scss';
import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';
import SlideBtn from 'components/UI/SlideBtn/SlideBtn';

function Locations() {
  const locations = [
    {
      image: image1,
      title: 'Bali Handara Gate',
      location: 'Indonesia',
      price: '$1200',
      stars: 5
    },
    {
      image: image2,
      title: 'Buddhist shrine',
      location: 'Tokyo, Japan',
      price: '$1000',
      stars: 4
    },
    {
      image: image3,
      title: 'Rialto Bridge',
      location: 'Italy',
      price: '$700',
      stars: 3
    }
  ];

  return (
    <div className={styles.locations} id="locations">
      <div className="container">
        <div className={styles.text}>
          <div className={styles['text-wrapper']}>
            <div className={`subtitle ${styles.subtitle}`}>Location</div>
            <h2 className={`title ${styles.title}`}>Suggested Location</h2>
            <p className={styles.desc}>
              Travel is my life. Since 1999, I’ve been traveling around the world nonstop. If you also love travel, you’re in the right place!
            </p>
          </div>
          <div className={styles.buttons}>
            <SlideBtn type="left" />
            <SlideBtn type="right" />
          </div>
        </div>
        <div className={styles['locations-wrapper']}>
          {locations.map((location) => (
            <div className={styles.location} key={location.title}>
              <img src={location.image} alt={location.title} loading="lazy" />
              <div className={styles['location-wrapper']}>
                <div className={styles.info}>
                  <div className={styles.row}>
                    <p className={styles.title}>{location.title}</p>
                    <div className={styles.stars}>
                      {Array.from({ length: location.stars }, (_, index) => (
                        <div key={index} className={styles.star}>
                          <GlobalSvgSelector iconId="star" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className={styles.row}>
                    <p className={styles.country}>{location.location}</p>
                    <p className={styles.price}>{location.price}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Locations;
