import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
class List extends React.Component { // definicja klasy List. Klasa List dziedziczy z klasy React.Component
    static propTypes = { // definicja typów propsów
        title: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
        image: PropTypes.node.isRequired,
        titleColumn: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    };
    static defaultProps = { // ustawienie domyślnych wartości parametrów, kiedy nie zostanie podana żadna zawartośc opisu listy, czyli to jest domyślny opis listy
        children: <p>Interesting things I want to check out!</p>,
    }
    render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
        return ( // metoda return zwraca obiekt JSX, a konkretniej div
            <section id="list" className={styles.component}>
                <Hero titleText={this.props.title}
                      imageFile={this.props.image} />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.columns}>
                    <Column titleColumn={<div key='1'>Animals</div>} />
                    <Column titleColumn={<div key='2'>Plants</div>} />
                    <Column titleColumn={<div key='3'>Minerals</div>} />
                </div>
            </section>
        )
    }
}

export default List;
