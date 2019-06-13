import React from 'react';

import './HomeDescriptionStyles.scss';

const HomeDescription : React.FunctionComponent = () => {
    return (
        <article className="home-description__wrapper">
            <div className="container">
                <div className="home-description">
                    <h1>Wir machen es besser!</h1>
                    <p>Mieten war immer mühselig. Unübersichtliche Equipment Listen. Preise ohne Steuer. Meist nur als Firma zugänglich. Auch als Privatperson ist Mieten sinnvoll. Die Top Gründe warum Sie etwas mieten sollten statt zu kaufen:</p>
                    <ul>
                        <li>Es kostet Ihnen nur einen Bruchteil des Kaufpreises.</li>
                        <li>Sie benötigen keinen Stauraum für die Lagerung.</li>
                        <li>Sie müssen nichts reparieren oder warten.</li>
                    </ul>
                    <p>Wir machen Ihnen das Mieten so einfach wie möglich. Suchen Sie ihr Equipment online aus oder lassen Sie sich von uns beraten.</p>
                </div>
            </div>
        </article>
    );
};

export default HomeDescription;