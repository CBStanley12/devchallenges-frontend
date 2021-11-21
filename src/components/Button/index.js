import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Button = ({ variant, color, size, value, disabled, disableShadow }) => {
    let shadow = disableShadow ? 'no-shadow' : '';

    return (
        <button
            className={`btn btn-${variant} btn-clr--${color} btn--${size} ${shadow}`}
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
    disableShadow: PropTypes.bool,
};

export default Button;