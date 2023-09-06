import React from 'react';

import * as propTypes from 'prop-types';

import GlobalSvgSelector from 'assets/images/icons/GlobalSvgSelector';

import styles from 'components/UI/SlideBtn/SlideBtn.module.scss';

function SlideBtn({ customClassName, type }) {
  // eslint-disable-next-line no-nested-ternary
  const typeClass = type === 'left' ? styles.left : type === 'right' ? styles.right : '';

  return (
    <button className={`${styles.button} ${customClassName} ${typeClass}`} type="button" aria-label="slide-button">
      <GlobalSvgSelector iconId="arrow-horizontal" />
    </button>
  );
}

SlideBtn.propTypes = {
  customClassName: propTypes.string,
  type: propTypes.string.isRequired
};

SlideBtn.defaultProps = {
  customClassName: ''
};

export default SlideBtn;
