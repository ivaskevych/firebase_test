import React from 'react';
import PropTypes from 'prop-types';
import './loader.css';

const Loader = ({ active }) => {
    return (
        <div className={ active ? 'loader-wrapper' : 'loader-hidden' }>
            <div className={ 'loader' }></div>
        </div>
    )
}

Loader.propTypes = {
    active: PropTypes.bool
}

Loader.defaultProps = {
    active: false
}

export default Loader;