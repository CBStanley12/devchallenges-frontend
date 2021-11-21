import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ variant, color, value }) => {
    return (
        <button
            className={`btn btn-${variant} btn-clr--${color}`}
            value={value}
        >
            {value}
        </button>
    )
};

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    value: PropTypes.string,
};

export default Button;