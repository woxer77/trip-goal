import React from 'react';

import Header from 'components/elements/Header/Header';
import FuncBtn from 'components/UI/FuncBtn/FuncBtn';

import bigImg from 'assets/images/intro/photo1.jpg';
import smallImg from 'assets/images/intro/photo2.jpg';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';

import styles from 'components/elements/Intro/Intro.module.scss';

function Intro() {
  return (
    <div className={styles.intro} id="home">
      <Header />
      <div className="container">
        <div className={styles.content}>
          <div className={styles.images}>
            <div className={styles['big-img']}>
              <img src={bigImg} alt="big-img" />
            </div>
            <div className={styles['small-img']}>
              <img src={smallImg} alt="small-img" />
            </div>
          </div>
          <div className={styles.text}>
            <p className={`subtitle ${styles.subtitle}`}>
              Book Now
            </p>
            <h1 className={`title ${styles.title}`}>
              Let’s Enjoy Your Trip with TripGoal
              <GlobalSvgSelector iconId="rocket" />
            </h1>
            <p className={`desc ${styles.desc}`}>
              Thinking of taking a break from every day&apos;s busy life? Planning to go out of the country with your loved ones to have some fun and quality time in a cost-effective way?
            </p>
            <FuncBtn customClassName={styles.btn}>Start Now</FuncBtn>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
