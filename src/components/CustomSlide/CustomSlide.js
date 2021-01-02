import React from 'react';
import styles from './CustomSlide.module.scss';


const CustomSlide = ({ body, index, children }) => {
    return (
        <div className={styles.slide}>
            <p>{children}</p>
        </div>
    );
}


export default CustomSlide;