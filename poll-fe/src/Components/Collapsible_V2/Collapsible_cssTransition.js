import React, { useState } from 'react';
import s from './Collapsible.module.scss';
import { CSSTransition } from 'react-transition-group';
import Arrow from '../Arrow/Arrow';
import './Collapsible.css';

function Collapsible({ children, heading, open=false }) {
  const [isOpen, setIsOpen] = useState(open);

  const duration = 500;

  return (
    <div className={s.collapsible}>
      <div onClick={() => setIsOpen(!isOpen)} className={s.header}>
        {heading}
        <Arrow upArrow={isOpen} dArrow={!isOpen} />
      </div>
      <CSSTransition
        in={isOpen}
        timeout={duration}
        className={`${s.children} ${isOpen ? s.open : ''}`}
        classNames={"collapse"}
      >
        {children}
      </CSSTransition>
    </div>
  )
}

export default Collapsible;