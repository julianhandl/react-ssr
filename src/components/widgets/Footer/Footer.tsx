import React from "react";
import { Link } from "react-router-dom";
import "./FooterStyles.scss";
import { urls } from "../../../Routes";
import { partyZelt, packageMusik } from "../../../../../data/products";

const Footer : React.FC = () => {
    return (
        <footer className="footer">
            <div className="footer__headline">
                <div className="container">
                    <div className="footer__headline-items">
                        <div className="footer__headline-item">
                            <Link to={urls.kontakt}>Musik</Link>
                        </div>
                        <div className="footer__headline-item">
                            <Link to={urls.kontakt}>Zelte</Link>
                        </div>
                        <div className="footer__headline-item">
                            <Link to={urls.kontakt}>Wissen</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__main">
                <div className="container">
                    <div className="footer__main-items">
                        <div className="footer__main-item">
                            <Link to={urls.kontakt}><h2>Musik</h2></Link>
                            <ul>
                                {Object.keys(packageMusik.variants).map((key: string) => {
                                    return <li key={`footer-musik-${key}`}><Link to={`${urls.kontakt}?paket=${key}`}>{packageMusik.variants[key].title}</Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="footer__main-item">
                            <Link to={urls.kontakt}><h2>Zelte</h2></Link>
                            <ul>
                                {Object.keys(partyZelt.variants).map((key: string) => {
                                    return <li key={`footer-zelt-${key}`}><Link to={`${urls.kontakt}?paket=${key}`}>{partyZelt.variants[key].title}</Link></li>
                                })}
                            </ul>
                        </div>
                        <div className="footer__main-item">
                            <Link to={urls.wissen}><h2>Wissen</h2></Link>
                            <ul>
                                <li><Link to={urls.kontakt}>Beratung</Link></li>
                                <li><Link to={urls.kontakt}>Begriffe</Link></li>
                                <li><Link to={urls.kontakt}>Blog</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-items">
                        <div className="footer__bottom-kontakt">
                            <div>
                                <span>Julian Handl</span>
                                <span>Dreihäuslweg 2</span>
                                <span>3253 Erlauf</span>
                            </div>
                            <div>
                                <a href="mailto:office@partypartner.at">office@partypartner.at</a>
                            </div>
                            <div>
                                <a href="tel:+4367763167169">+43 677 631 671 69</a>
                            </div>
                        </div>
                        <div className="footer__bottom-links">
                            <div>
                                <span>© Copyright {(new Date).getFullYear()}</span>
                                <span>Julian Handl</span>
                            </div>
                            <div>
                                <Link to={urls.datenschutz}>Datenschutz</Link>
                                <Link to={urls.impressum}>Impressum</Link>
                                <Link to="/agb">AGB</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;