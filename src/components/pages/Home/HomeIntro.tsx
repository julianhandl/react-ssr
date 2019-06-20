import React from 'react';
import {packageMusik, partyZelt} from "../../../../../data/products";

import './HomeIntroStyles.scss';
import { Link } from 'react-router-dom';
import { urls } from '../../../Routes';

const HomeIntro : React.FunctionComponent = () => {
    const musik = packageMusik.variants[Object.keys(packageMusik.variants)[0]];
    const zelt = partyZelt.variants[Object.keys(partyZelt.variants)[0]];

    return (
        <div className="container">
            <article className="home-intro">
                <section className="home-intro__slogan">
                    <h1>
                        <span>Mieten Sie</span>
                        <small>was sonst verstauben würde</small>
                    </h1>
                    <ul>
                        <li>Ihr persönlicher Partyservice</li>
                        <li>Einfache online Übersicht</li>
                        <li>Fixe Preise und online Buchung</li>
                        {/* <li>Alles für Privatpersonen</li> */}
                    </ul>
                    {/*
                    <div className="home-intro__action">
                        <Link to={urls.musik} className="home-intro__action-button home-intro__action-button--musik">Musik mieten</Link>
                        <Link to={urls.zelt} className="home-intro__action-button home-intro__action-button--zelt">Zelt mieten</Link>
                    </div>
                    */}
                </section>
                <div className="home-intro__boxes">
                    <Link to={urls.musik} className="home-intro__box">
                        <h2>{packageMusik.shortTitle}</h2>
                        <p>{packageMusik.description}</p>
                        <div className="home-intro__box-price">
                            <small>ab</small>
                            <span>{(musik.priceCents / 100).toFixed(0)}€</span>
                            <small className="home-intro__box-price-day">/ Tag</small>
                        </div>
                    </Link>
                    <Link to={urls.zelt} className="home-intro__box">
                        <h2>{partyZelt.shortTitle}</h2>
                        <p>{partyZelt.description}</p>
                        <div className="home-intro__box-price">
                            <small>ab</small>
                            <span>{(zelt.priceCents / 100).toFixed(0)}€</span>
                            <small className="home-intro__box-price-day">/ Tag</small>
                        </div>
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default HomeIntro;