import React from 'react';
import './KontaktIntroStyles.scss';

const KontaktIntro : React.FunctionComponent = () => {
    return (
        <div className="container">
            <div className="kontakt-intro">
                <div className="kontakt-intro__slogan">
                    <h1>
                        <span>Kontakt</span>
                    </h1>
                    <p>
                        <span>User Shopsystem ist noch in den Kinderschuhen. </span>
                        <span>Wir beraten Sie und schreiben Ihnen gerne ein Angebot </span>
                        <span>solange unsere Webseite noch Laufen lernt.</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default KontaktIntro;