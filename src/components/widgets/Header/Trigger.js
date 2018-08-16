import React from 'react';
import './Trigger.scss';

export default ({open}) => (
    <div className={"menu-icon" + (open ? ' menu-icon--open' : '')}>
        <div className="menu-icon__bar menu-icon__bar--bar1"></div>
        <div className="menu-icon__bar menu-icon__bar--bar2"></div>
        <div className="menu-icon__bar menu-icon__bar--bar3"></div>
    </div>
);