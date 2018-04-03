import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import logo from '../../../resources/images/best_it_logo_default.png';

import './Header.scss';

@connect(({router:{location}})=>({
    path: location && location.pathname || "/"
}),{})
export default class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <div className="logo">
                    <img src={logo} />
                </div>
                <ul className="menu">
                    <li><Link to="/" className={this.props.path === "/" ? "active" : ""}>Home</Link></li>
                    <li><Link to="/about" className={this.props.path === "/about" ? "active" : ""}>About</Link></li>
                    <li><Link to="/leistungen" className={this.props.path === "/leistungen" ? "active" : ""}>Leistungen</Link></li>
                    <li><Link to="/news" className={this.props.path === "/news" ? "active" : ""}>News</Link></li>
                </ul>
            </header>
        );
    }
}