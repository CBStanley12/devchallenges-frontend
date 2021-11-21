import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ variant, color, size, value, disabled }) => {
    return (
        <button
            className={`btn btn-${variant} btn-clr--${color} btn--${size}`}
            value={value}
            disabled={disabled}
        >
            {value}
        </button>
    )
};

Button.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.string,
    size: PropTypes.string,
    value: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;