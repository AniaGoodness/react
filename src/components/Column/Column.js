import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
class Column extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        card: PropTypes.array,
    };
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.titleColumn}</h3>
            </section>
        );
    }
}

export default Column;