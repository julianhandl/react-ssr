import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Trigger from './Trigger';
import logo from '../../../resources/images/best_it_logo_default.png';

import {routes} from '../../../Routes';
import { toggleMenu } from '../../../actions/website';

import './Header.scss';

export class Header extends React.Component {
    render(){
        let navItems = routes.filter(route => route.navigation);

        return (
            <header className="header">
                <div className="header__logo">
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <nav className="header-menu">
                    <div className="header-menu__trigger" onTouchStart={() => this.props.toggleMenu()}>
                        <Trigger open={this.props.menuOpen} />
                    </div>
                    <ul className={"header-menu__list" + (this.props.menuOpen ? ' header-menu__list--open' : '')}>
                        {navItems.map((item, index) => {
                            return <li itemProp="name" key={`navigation-item-${index}`}>
                                <Link to={item.path} itemProp="url" className={this.props.path === item.path ? "active" : ""}>{item.title}</Link>
                                {item.routes ? <ul key={`navigation-subnav-${index}`}>{item.routes.map((subitem, subindex) => {
                                    return <li itemProp="name"  key={`navigation-item-${index}-${subindex}`}><Link to={item.path + subitem.path} itemProp="url" className={this.props.path === (item.path + subitem.path) ? "active" : ""}>{subitem.title}</Link></li>
                                })}</ul> : null}
                            </li>;
                        })}
                    </ul>
                </nav>
            </header>
        );
    }
}

export default connect(({router:{location}, website:{menuOpen}})=>({
    menuOpen,
    path: location && location.pathname || "/"
}),{
    toggleMenu
})(Header);
