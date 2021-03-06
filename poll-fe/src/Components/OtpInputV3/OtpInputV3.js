import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import s from './OtpInputV3.module.scss';

function OtpInputV3({ length, onChange, error }) {
  const [values, setValues] = React.useState([]);
  const refInputWrapper = useRef();

  const focusOnLastElement = () => {
    const { current: { children } } = refInputWrapper;
    if (values.length === 0) {
      const [ele, ..._] = children;
      ele.focus();
      // ele.select();
    } else {
      const ele = children[values.length - 1];
      ele.focus();
      // ele.select();
    }
  };

  const onfocus = (e) => {
    const temp = e.target.value;
    e.target.value = '';
    e.target.value = temp;
  };


  const oninputclick = (e) => {
    const temp = e.target.value;
    e.target.value = '';
    e.target.value = temp;
  };

  const onkeydown = (e) => {
    const { target: { id } } = e;
    if (e.key === 'Backspace') {
      setValues([...values.slice(0, id), ...values.slice(Number(id) + 1, values.length)]);
    } else if (e.key === 'ArrowLeft') {
      // id !== 0.0.toString()
      //   && e.target.previousElementSibling.focus()
      //   && e.target.previousElementSibling.select();
    } else if (e.key === 'ArrowRight') {
      // id !== (values.length - 1).toString()
      //   && e.target.nextElementSibling.focus()
      //   && e.target.nextElementSibling.select();
    }
  };

  useEffect(() => {
    focusOnLastElement();
    const value = values.join().trim();
    onChange(value);
  }, [values]);

  const onchange = (e) => {
    const { target: { id, value } } = e;
    const val = value.trim().split('');
    if (val.length === 2) val.shift();
    if (val.length + values.length <= length) {
      let newValues;
      if (Number(id) === values.length - 1) {
        newValues = [...values, ...val];
      } else {
        newValues = [...values.slice(0, id), ...val, ...values.slice(id, values.length)];
      }
      setValues(newValues);
    }
  };

  const onpaste = (e) => {
    const value = e.clipboardData.getData('text/plain');
    if (Number.isInteger(Number(value)) && Number(value) >= 0) {
      setValues([...value.split('').splice(0, length)]);
    }
  };

  const onClickInputWrapper = (e) => {
    focusOnLastElement();
  };

  return (
    <>
      <div className={s.inputWrapper} ref={refInputWrapper} onClick={onClickInputWrapper}>
        {
          Array(length).fill('').map((_, index) => (
            <input
            // eslint-disable-next-line react/no-array-index-key
              key={index}
              id={index}
              type="number"
              className={s.inputOtp}
              value={values[index] || ''}
              onClick={oninputclick}
              onChange={onchange}
              onFocus={onfocus}
              onPaste={onpaste}
              onKeyDown={onkeydown}
              max="9"
              min="0"
              autoComplete="new-password"
              autoCorrect="off"
            // pattern attribute to open numeric keyboard in iOS
              pattern="[0-9]*"
            />
          ))
        }
      </div>
      {error && <div className={s.error}>{error}</div>}
    </>
  );
}

export default OtpInputV3;

OtpInputV3.propTypes = {
  /*
    *   Otp Input Field
    *   for 6 digits
    */
  onChange: PropTypes.func,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  length: PropTypes.number,
};

OtpInputV3.defaultProps = {
  onChange: () => { },
  error: false,
  length: 6,
};
