import React, { useState } from 'react';
import s from './Collapsible.module.scss';
import { Transition } from 'react-transition-group';
import Arrow from '../Arrow/Arrow';

function Collapsible({ children, heading }) {
  const [open, setOpen] = useState(false);

  const duration = 300;
  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out, max-height ${duration}ms ease-in-out`,
    opacity: 0,
    maxHeight: "0px",
  }

  const transitionStyles = {
    entering: { opacity: 1, maxHeight: "200px" },
    entered: { opacity: 1, maxHeight: "200px" },
    exiting: { opacity: 0, maxHeight: "0px" },
    exited: { opacity: 0, maxHeight: "0px" },
  };

  return (
    <div className={s.collapsible}>
      <div onClick={() => setOpen(!open)} className={s.header}>
        {heading}
        <Arrow upArrow={open} dArrow={!open} />
      </div>
      <Transition
        in={open}
        timeout={duration}
      >
        {
          state =>
            <div className={`${s.children} ${open ? s.open : ''}`} style={{ ...defaultStyle, ...transitionStyles[state] }}>
              {children}
            </div>
        }
      </Transition>
    </div>
  )
}

export default Collapsible;