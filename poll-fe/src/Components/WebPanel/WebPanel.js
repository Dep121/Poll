import React from 'react';
import s from './WebPanel.module.scss';

function WebPanel({ noTop, noLeft, noBottom, noRight, children }) {
    
    const c = `${noTop ? s['pn-t'] : ''}`
    + `${noLeft ? ' ' + s['pn-l'] : ''}`
    + `${noBottom ? ' ' + s['pn-b'] : ''}`
    + `${noRight ? ' ' + s['pn-r'] : ''}`;

    return <div className={`${s.pn} ${c}`}>{ children }</div>
}

export default WebPanel;