import React, { useState } from "react";
import s from './Collapsible.module.scss';
import Arrow from "../Arrow/Arrow";

function Collapsible({ open, heading, children }) {
    const [isOpen, setIsOpen] = useState(open);

    return (
    <>
        <div onClick={() => setIsOpen(!isOpen)} className={s.header}>
            <span>{heading}</span>
            <Arrow upArrow={isOpen} dArrow={!isOpen} />
        </div>

        <div className={`${s.children} ${isOpen ? s.open : ''}`}>
            {children}
        </div>
    </>
    );
}

export default Collapsible;