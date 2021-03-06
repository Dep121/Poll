import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

function Input({
    disabled,
    onChange = ()=>{},
    onFocus = ()=>{},
    onBlur = ()=>{},
    type,
    inputId,
    inputMode,
    pattern,
    value,
    max,
    maxLength,
    placeholder,
    error,
    label,
    labelFor='',
}) {

    const [focus, setFocus] = useState(false);

    async function onInputChange(e) {
        const { target: { value } } = e;
        onChange({value, inputId});
    }

    async function onInputFocus(e) {
        setFocus(true);
        onFocus();
    }

    async function onInputBlur(e) {
        setFocus(false);
        onBlur(value);
    }

    return (
        <>
            <div className={'input-box'}>
                <label htmlFor={labelFor}>{label}</label>
                <input
                    id={inputId}
                    type={type}
                    inputMode={inputMode}
                    pattern={pattern}
                    onChange={onInputChange}
                    onBlur={onInputBlur}
                    onFocus={onInputFocus}
                    className={`input${focus ? ' input--active' : ''}${error ? ' input--error' : ''}`}
                    disabled={disabled}
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    value={value}
                    max={max}
                    maxLength={maxLength}
                />
            </div>
        </>
    )
}

Input.propTypes = {
    /**
     * on click Input
     */
    onChange: PropTypes.func.isRequired,
    /**
     * to disable Input
     */
    disabled: PropTypes.bool,
}

export default Input;
