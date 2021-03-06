import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

function Button({ disabled, onClick, filled, big, children }) {

    const cl = 'btn'
    + `${filled ? ' btn-filled' : ''}`
    + `${big ? ' btn-big' : ''}`;

    return <button onClick={onClick} className={cl} disabled={disabled}>
        {children}
    </button>
}

Button.propTypes = {
    /**
     * on click button
     */
    onClick: PropTypes.func.isRequired,
    /**
     * to disable button
     */
    disabled: PropTypes.bool,
    /**
     * to make round corners
     */
    rounded: PropTypes.bool,
    /**
     * to give button text
     */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default Button;
