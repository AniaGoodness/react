import React from 'react';
import styles from './Column.scss';
import Creator from '../Creator/Creator.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class Column extends React.Component {
    static propTypes = {
      title: PropTypes.node.isRequired,
      cards: PropTypes.array,
      icon: PropTypes.node,
      addCard: PropTypes.func,
    }
    static defaultProps = {
      icon: settings.defaultColumnIcon,
    }
    render() {
      const {title, icon, cards, addCard} = this.props;
      return (
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>
          <div className={styles.cards}>
            {cards.map(cardsData => (
              <Card key={cardsData.id} {...cardsData} />
            ))}
          </div>
          <div className={styles.creator}>
            <Creator text={settings.cardCreatorText} action={addCard} />
          </div>
        </section>
      );
    }
}

export default Column;