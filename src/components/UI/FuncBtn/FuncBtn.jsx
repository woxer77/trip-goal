import React from 'react';

import * as propTypes from 'prop-types';

import styles from './FuncBtn.module.scss';

function FuncBtn({ children, customClassName }) {
  return (
    <button className={`${styles.button} ${customClassName}`} type="button">
      {children}
    </button>
  );
}

FuncBtn.propTypes = {
  children: propTypes.node,
  customClassName: propTypes.string
};

FuncBtn.defaultProps = {
  children: 'Button',
  customClassName: ''
};

export default FuncBtn;
