import React from 'react';

import bgImage from 'assets/images/tour/bg-image.jpg';
import map from 'assets/images/tour/map.png';
import lines from 'assets/images/tour/lines.png';
import compass from 'assets/images/tour/compass.png';

import FuncBtn from 'components/UI/FuncBtn/FuncBtn';
import PlayBtn from 'components/UI/PlayBtn/PlayBtn';

import styles from './Tour.module.scss';

function Tour() {
  return (
    <div className={styles.tour}>
      <div className={styles['tour-wrapper']}>
        <img src={bgImage} alt="tour-bg" className={styles['bg-image']} loading="lazy" />
        <img src={map} alt="map" className={styles.map} loading="lazy" />
        <PlayBtn customClassName={styles.play} />
        <div className="container">
          <div className={styles.text}>
            <div className={`subtitle ${styles.subtitle}`}>
              Take a Tour
            </div>
            <div className={`title ${styles.title}`}>
              Discover Our Travel Guideline
            </div>
            <div className={`desc ${styles.desc}`}>
              For curious travelers who want to connect locally and go deeper into a place. Our Experiential Travel Guides highlight offbeat and local experiences that help you.
            </div>
            <FuncBtn>Start Now</FuncBtn>
          </div>
        </div>
      </div>
      <img src={lines} alt="lines" className={styles.lines} loading="lazy" />
      <img src={compass} alt="compass" className={styles.compass} loading="lazy" />
    </div>
  );
}

export default Tour;
