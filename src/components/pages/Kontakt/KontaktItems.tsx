import React from 'react';
import './KontaktItemsStyles.scss';

const KontaktItems : React.FunctionComponent = () => {
    return (
        <div className="container">
            <div className="kontakt-items">
                <div className="kontakt-items__container">
                    <div className="kontakt-item">
                        <h2>E-Mail</h2>
                        <a href="mailto:office@partypartner.at">office@partypartner.at</a>
                    </div>
                    <div className="kontakt-item">
                        <h2>Telefon</h2>
                        <a href="tel:+4367763167169">+43 677 631 671 69</a>
                    </div>
                    <div className="kontakt-item">
                        <h2>Whatsapp</h2>
                        <a target="_blank" href="https://wa.me/4367763167169">+43 677 631 671 69</a>
                    </div>
                </div>
                <div className="kontakt-item">
                    <h2>Adresse</h2>
                    <p>
                        Julian Handl<br />
                        Dreihäuslweg 2<br />
                        3253 Erlauf<br />
                        Österreich
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KontaktItems;