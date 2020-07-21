import React from 'react'; // import biblioteki React
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
import { settings } from '../../data/dataStore';
import ReactHtmlParser from 'react-html-parser'; // importujemy react-html-parser
class List extends React.Component {
    // definicja klasy List. Klasa List dziedziczy z klasy React.Component
    // dodawanie stanu komponentu za pomocą właściwości (podobnie jak metody)
    // jeżeli dana włąściwość nie istnieje to w this.props.columns znajdzie się pusta tablica
    state = {
        columns: this.props.columns || [],
    }
    // definicja typów propsów
    static propTypes = { 
        title: PropTypes.node.isRequired, // definicja typu Propsa (node) z zaznaczeniem że jest on wymagany (ten komponent MUSI otrzymać daną wartość)
        image: PropTypes.node,
        titleColumn: PropTypes.node,
        description: PropTypes.node,
        columns: PropTypes.array,
    }
    // ustawienie domyślnych wartości parametrów/propsów, kiedy nie zostanie podana żadna zawartośc opisu listy, czyli to jest domyślny opis listy
    static defaultProps = { 
        description: settings.defaultListDescription,
    }
    render() { // metoda render - od niej zależy to co wyświetli się w przeglądarce
        return ( // metoda return zwraca obiekt JSX, a konkretniej div
            <section id="list" className={styles.component}>
                <Hero titleText={this.props.title}
                    imageFile={"http://uploads.kodilla.com/bootcamp/fer/11.react/space.png"} />
                <div className={styles.description}>
                    {ReactHtmlParser(this.props.description)}
                </div>
                <div className={styles.columns}>
                    {this.state.columns.map(({ key, ...columnProps }) => ( 
                        <Column key={key} {...columnProps} />
                    ))} 
                </div>
            </section>
        );
    }
}

export default List;
// .map działa jak pętla i jest dostępna dla kazdej tablicy (array), sluzy do modyfikacji jej kazdego elementu, zwraca nową tablicę ze zmienionymi wartościami