import React from 'react';
import logo from '../../../resources/images/best_it_logo_default.png';

import './Header.scss';

export default class Header extends React.Component {
    render(){
        return (
            <header className="header">
                <img src={logo} />
            </header>
        );
    }
}