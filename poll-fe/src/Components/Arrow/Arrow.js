import React from "react";
import s from './Arrow.module.scss';
import { cx } from "../../utility/util";

function Arrow({ upArrow, dArrow, lArrow, rArrow}){
    return <>
        <span className={cx(s, {arrow: true, upArrow, dArrow, lArrow, rArrow})} ></span>
    </>
}

export default Arrow;