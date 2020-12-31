import React from 'react';
import styles from './Button.module.scss';


const Button = ({ width, btnLabel }) => {
  return (
    <button className={width ? [styles.btn, styles.widthHundred].join(' ') : styles.btn}>{btnLabel}</button>
  );
}


export default Button;