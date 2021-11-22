import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import Icon from '@mui/material/Icon';

const Button = ({ variant, color, size, value, disabled, disableShadow, startIcon, endIcon, attributes }) => {
    let shadow = disableShadow ? 'no-shadow' : '';

    return (
        <button
            className={`btn btn-${variant} btn-clr--${color} btn--${size} ${shadow}`}
            value={value}
            disabled={disabled}
            {...attributes}
        >
            {startIcon ? <Icon className="icon-start">{startIcon}</Icon> : null}
            {value}
            {endIcon ? <Icon className="icon-end">{endIcon}</Icon> : null}
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
    startIcon: PropTypes.string,
    endIcon: PropTypes.string,
    attributes: PropTypes.object,
};

export default Button;