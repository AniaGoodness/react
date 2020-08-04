import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';
class Card extends React.Component {
    static propTypes = {
        titleCard: PropTypes.node,
    };
    render() {
        return (
            <section className={styles.component}>
                <h3 className={styles.title}>{this.props.titleCard}</h3>
            </section>
        );
    }
}

export default Card;