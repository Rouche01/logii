import React from 'react';
import styles from './Spacer.module.scss';


const Spacer = (props) => {

  return(
    <div className={styles.Spacer}>
      {props.children}
    </div>
  )
}


export default Spacer;