import React from 'react';
import styles from './Button.module.scss';


const Button = ({ width, btnLabel, clicked }) => {
  return (
    <button 
      className={width ? [styles.btn, styles.widthHundred].join(' ') : styles.btn}
      onClick={clicked}
    >
      {btnLabel}
    </button>
  );
}


export default Button;