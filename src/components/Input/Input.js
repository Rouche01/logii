import React from 'react';
import styles from './Input.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Input = ({ type, label, placeholder, nameAttr, changed, error, value, iconType }) => {

  return (
    <div className={styles.mainWrapper}>
      <label htmlFor="email">{label}</label>
      <div className={styles.inputContainer}>
        <span className={styles.iconWrapper}>
          <FontAwesomeIcon icon={iconType} color={'rgba(0, 0, 0, 0.54)'} className={styles.inputIcon} />
        </span>
        <input type={type} placeholder={placeholder} name={nameAttr} className={styles.input} 
          value={value} onChange={(val) => changed(val)}
        />
      </div>
    </div>
  );
}


export default Input;