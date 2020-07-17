import React from 'react';
import styles from './List.scss';

class List extends React.Component {
    render() {
        return (
            <section id="list" className={styles.component}>
                <h2 className={styles.subtitle}>Things to do</h2>
            </section>
        )
    }
}

export default List;
