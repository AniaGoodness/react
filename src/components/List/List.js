import React from 'react';
import styles from './List.scss';
import styles from '../Hero/Hero.scss'

class List extends React.Component {
    render() {
        return (
            <section id="list" className={styles.component}>
                <Hero />
            </section>
        )
    }
}

export default List;
