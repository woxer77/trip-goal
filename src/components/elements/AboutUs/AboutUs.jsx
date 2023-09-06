import React from 'react';

import bigImg from 'assets/images/about-us/photo1.jpg';
import smallImg from 'assets/images/about-us/photo2.jpg';

import styles from './AboutUs.module.scss';

function AboutUs() {
  const stats = [
    {
      name: 'visitors',
      value: '10M+'
    },
    {
      name: 'Hotels',
      value: '109'
    },
    {
      name: 'Food Shop',
      value: '29'
    },
    {
      name: 'Related Spots',
      value: '18'
    }
  ];

  return (
    <div className={styles.about} id="about us">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={`subtitle ${styles.subtitle}`}>About Us</p>
            <h2 className={`title ${styles.title}`}>The Perfect Travel Place For You & Your Family</h2>
            <p className={`desc ${styles.desc}`}>
              how travel can be one of the best tools for personal growth. We share some of the life lessons we&apos;ve learned on the road that has provided us insight into empathy, mindfulness, meditation, comfort zones, two-way storytelling, being present, connection and more.
            </p>
            <div className={styles.stats}>
              {stats.map((stat) => (
                <div className={styles.stat} key={stat.name}>
                  <p className={styles.value}>{stat.value}</p>
                  <p className={styles.name}>{stat.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.images}>
            <div className={styles['small-img']}>
              <img src={smallImg} alt="small-img" loading="lazy" />
            </div>
            <div className={styles['big-img']}>
              <img src={bigImg} alt="big-img" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
