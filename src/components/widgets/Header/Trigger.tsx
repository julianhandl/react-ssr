import React from "react";
import './TriggerStyles.scss';

export default class Trigger extends React.Component<any, any> {
    render(){
        let open: boolean = this.props.open;
        return <div className={"menu-icon" + (open ? ' menu-icon--open' : '')}>
                <div className="menu-icon__bar menu-icon__bar--bar1"></div>
                <div className="menu-icon__bar menu-icon__bar--bar2"></div>
                <div className="menu-icon__bar menu-icon__bar--bar3"></div>
            </div>
    }
}