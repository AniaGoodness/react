import React from 'react';
import PropTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.protoTypes = {
    name: PropTypes.node.isRequired,
}
export default Icon;