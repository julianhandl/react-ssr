import React from 'react';
import { Map } from "../../widgets/Icons/Map";

import './HomeDeliveryStyles.scss';

const HomeDelivery : React.FunctionComponent = () => {
    return (
        <div className="container">
            <article className="home-delivery">
                <Map />
                <div className="home-delivery__text">
                    <h1>Vermietung in Österreich</h1>
                    <p>Wir vermieten unser Equipment speziell in Oberösterreich, Niederösterreich und Wien. Auf Anfrage auch in anderen Bundesländern.</p>
                </div>
            </article>
        </div>
    );
};

export default HomeDelivery;