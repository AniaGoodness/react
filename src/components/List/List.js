import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import Column from '../Column/Column.js';
import PropTypes from 'prop-types';
class List extends React.Component {
    static propTypes = {
        title: PropTypes.node.isRequired,
        image: PropTypes.node.isRequired,
        columns: PropTypes.node.isRequired,
        children: PropTypes.node.isRequired,
    }
    static defaultProps = {
        children: <p>Interesting things I want to check out!</p>,
    }
    render() {
        return (
            <section id="list" className={styles.component}>
                <Hero titleText={this.props.title}
                      imageFile={this.props.image} />
                <div className={styles.description}>
                    {this.props.children}
                </div>
                <div className={styles.component}>
                    <Column titleColumn={this.props.columns} />
                </div>
            </section>
        )
    }
}

export default List;
