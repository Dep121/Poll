import React from 'react';
import s from "./Checkmark.module.scss";
import { ReactComponent as Check } from '../../assets/svg/checkmark.svg'

function Checkmark(){
    return(
        <Check className={s.check} />
    )
}

export default Checkmark;