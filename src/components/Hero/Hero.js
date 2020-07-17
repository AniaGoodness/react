import React from 'react';
import styles from './Hero.scss';

const Hero = () => (
    <header className={styles.component}>
        <h2 className={styles.title}>Hello world!</h2>
        <img className={styles.image} src="images/space.png" />    
    </header>
);

export default Hero;