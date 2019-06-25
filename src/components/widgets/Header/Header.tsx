import React, { Dispatch } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Trigger from "./Trigger";
import {IState} from "../../../reducers/root-reducer";
import { toggleMenu } from '../../../actions/website';

const Logo = require("../../../resources/images/logo.svg");

import './HeaderStyles.scss';
import { urls } from '../../../Routes';
import Basket from '../Icons/Basket';
import { IBasketItem } from '../../../reducers/basket';

interface IHeaderStateProps {
    menuOpen: boolean;
    path: string;
    headerCount: number;
}

interface IHeaderDispatchProps {
    toggleMenu: Function;
}

type HeaderProps = IHeaderDispatchProps & IHeaderStateProps;

export class Header extends React.Component<HeaderProps, {}> {
    render(){
        // let navItems : any[] = routes.filter((route: any) => route.navigation);

        return (
            <div className="container">
                <header className="header">
                    <Link to="/" className="header__logo">
                        <img src={Logo} alt="Party Partner" />
                    </Link>
                    <nav className="header__menu">
                        <div
                            className={"header__menu-trigger" + (this.props.menuOpen ? ' header__menu-trigger--open' : '')}
                            onClick={() => this.props.toggleMenu()}
                        >
                            <Trigger />
                        </div>
                        <ul className={"header__menu-list" + (this.props.menuOpen ? ' header__menu-list--open' : '')}>
                            {/*}
                            <li itemProp="name">
                                <Link to={urls.musik} itemProp="url">Musik</Link>
                            </li>
                            */}
                            <li itemProp="name" className={this.props.path === urls.musik ? "active" : ""}>
                                <Link to={urls.musik} itemProp="url">Musik</Link>
                            </li>
                            <li itemProp="name" className={this.props.path === urls.zelt ? "active" : ""}>
                                <Link to={urls.zelt} itemProp="url">Zelte</Link>
                            </li>
                            <li itemProp="name" className={this.props.path === urls.kontakt ? "active" : ""}>
                                <Link to={urls.kontakt} itemProp="url">Kontakt</Link>
                            </li>
                            {/*
                            {navItems.map((item: any, index: number) => {
                                return <li itemProp="name" key={`navigation-item-${index}`}>
                                    <Link to={item.path} itemProp="url" className={this.props.path === item.path ? "active" : ""}>{item.title}</Link>
                                    {item.routes ? <ul key={`navigation-subnav-${index}`}>{item.routes.map((subitem: any, subindex: number) => {
                                        return <li itemProp="name"  key={`navigation-item-${index}-${subindex}`}><Link to={item.path + subitem.path} itemProp="url" className={this.props.path === (item.path + subitem.path) ? "active" : ""}>{subitem.title}</Link></li>
                                    })}</ul> : null}
                                </li>;
                            })}
                            */}
                        </ul>
                        <Link to={urls.warenkorb} className={"header__menu-basket"}>
                            <Basket />
                            <span>{this.props.headerCount}</span>
                        </Link>
                    </nav>
                </header>
            </div>
        );
    }
}

export function mapStateToProps(state: IState, ownProps: any): IHeaderStateProps {
    return {
        menuOpen: state.website ? state.website.menuOpen : false,
        path: state.router.location && state.router.location.pathname || "/",
        headerCount: state.basket.items ? state.basket.items.reduce((agg: number, item: IBasketItem) => agg + item.quantity, 0) :  0
    }
}

export function mapDispatchToProps(dispatch: Dispatch<any>, ownProps: any): IHeaderDispatchProps {
    return {
        toggleMenu: () => dispatch(toggleMenu())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);