import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './OtpInputV2.scss';

function OtpInputV2() {
    const [value1, setValue1] = React.useState("");
    const [value2, setValue2] = React.useState("");
    const [value3, setValue3] = React.useState("");
    const [value4, setValue4] = React.useState("");
    const [value5, setValue5] = React.useState("");
    const [value6, setValue6] = React.useState("");

    const handleScroll = (e) => {
        e.target.scrollLeft = 0;
    }

    const onfocus = (e) => {
        let temp_value = e.target.value;
        e.target.value = '';
        e.target.value = temp_value;
    }

    const onblur = (e) => {
    }

    const onkeydown = (e) => {
        const { target: { id, value } } = e;
        e.persist();
        if(e.key == 'Backspace'){
            (function(id, e){
                setTimeout(function(){ id !== '1' && e.target.previousElementSibling.focus(); }, 1);
            })(id, e);
            
        }
        else if(e.key == 'ArrowLeft'){
            id !== '1' && e.target.previousElementSibling.focus();
        }else if(e.key == 'ArrowRight'){
            id !== '6' && e.target.nextElementSibling.focus();
        }
    }

    useEffect(()=>{
        console.log(`${value1}${value2}${value3}${value4}${value5}${value6}`.trim());
    })

    const onchange = (e) => {
        const { target: { id, value } } = e;
        const val = value.trim();
        if(val > 9) {
            id !== '6' && e.target.nextElementSibling.focus();
            return;
        }

        let alreadyFilled = false;

        switch (id) {
            case '1':
                alreadyFilled = value1 ? true : false;
                setValue1(val);
                break;
            case '2':
                alreadyFilled = value2 ? true : false;
                setValue2(val);
                break;
            case '3':
                alreadyFilled = value3 ? true : false;
                setValue3(val);
                break;
            case '4':
                alreadyFilled = value4 ? true : false;
                setValue4(val);
                break;
            case '5':
                alreadyFilled = value5 ? true : false;
                setValue5(val);
                break;
            case '6':
                alreadyFilled = value6 ? true : false;
                setValue6(val);
                break;
        }

        id !== '6' && !alreadyFilled && e.target.nextElementSibling.focus();
        // console.log(otpJoin(id, value));
    }

    return (
        <div className={s.input_wrapper}>
            <input id='1' type='number' value={value1} onChange={onchange} onFocus={onfocus} onBlur={onblur} onKeyDown={onkeydown} max='9' min='0' />
            <input id='2' type='number' value={value2} onChange={onchange} onFocus={onfocus} onBlur={onblur} onKeyDown={onkeydown} max='9' min='0' />
            <input id='3' type='number' value={value3} onChange={onchange} onFocus={onfocus} onBlur={onblur} onKeyDown={onkeydown} max='9' min='0' />
            <input id='4' type='number' value={value4} onChange={onchange} onFocus={onfocus} onBlur={onblur} onKeyDown={onkeydown} max='9' min='0' />
            <input id='5' type='number' value={value5} onChange={onchange} onFocus={onfocus} onBlur={onblur} onKeyDown={onkeydown} max='9' min='0' />
            <input id='6' type='number' value={value6} onChange={onchange} onFocus={onfocus} onBlur={onblur} onKeyDown={onkeydown} max='9' min='0' />
        </div>
    );
}

export default OtpInputV2;

OtpInputV2.propTypes = {
    /*
    *   Otp Input Field
    *   for 6 digits
    */
}

OtpInputV2.defaultProps = {

}