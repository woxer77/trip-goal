import React from 'react';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';

import * as propTypes from 'prop-types';

import styles from './PlayBtn.module.scss';

function PlayBtn({ customClassName }) {
  return (
    <div className={`${styles.button} ${customClassName}`}>
      <div className={styles['outer-circle']}>
        <div className={styles['inner-circle']}>
          <GlobalSvgSelector iconId="play" />
        </div>
      </div>
    </div>
  );
}

PlayBtn.propTypes = {
  customClassName: propTypes.string
};

PlayBtn.defaultProps = {
  customClassName: ''
};

export default PlayBtn;
