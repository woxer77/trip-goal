import React from 'react';

import messages from 'assets/images/steps/messages.png';
import calendarLarge from 'assets/images/steps/calendar-large.png';
import stars from 'assets/images/steps/stars.png';

import styles from './Steps.module.scss';

function Steps() {
  const steps = [{
    image: messages,
    alt: 'messages',
    title: 'Tell us what you want to do',
    desc: 'Fill out a 2-minute questionnaire about how you like to travel'
  },
  {
    image: calendarLarge,
    alt: 'calendar large',
    title: 'Share your travel preference',
    desc: 'It all happends online,We recommend everything to your vision'
  },
  {
    image: stars,
    alt: 'stars',
    title: 'We’ll give you recommendations',
    desc: 'Once you’re happy with your final plan, We handle everything for you'
  }];

  return (
    <div className={styles.steps}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.text}>
            <p className={`subtitle ${styles.subtitle}`}>
              3 steps for the perfect trip
            </p>
            <h2 className={`title ${styles.title}`}>
              Find travel perfection
            </h2>
            <p className={styles.desc}>
              Naturally head of the class when it comes to luxury travel planning, because we do more homework than anyone else
            </p>
          </div>
          <div className={styles['steps-wrapper']}>
            {steps.map((step) => (
              <div className={styles.step} key={step.alt}>
                <div className={styles.content}>
                  <img src={step.image} alt={step.alt} />
                  <p className={styles.title}>
                    {step.title}
                  </p>
                  <p className={styles.desc}>
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Steps;
