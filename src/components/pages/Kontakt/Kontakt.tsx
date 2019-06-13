import React from 'react';
import {Helmet} from "react-helmet";
import './KontaktStyles.scss';
import KontaktIntro from './KontaktIntro';
import KontaktItems from './KontaktItems';

export class Kontakt extends React.Component<any, {}>{
    renderContent = () => {
        return (
            <section className="page page--kontakt" key="page-kontakt-key">
                <KontaktIntro />
                <KontaktItems />
            </section>
        );
    }
    render(){
        return[
            <Helmet key='helmet-key-kontakt'>
                <title>Kontakt | Party Partner</title>
                <meta name="description" content="Das ist die Home Seite" />
            </Helmet>,
            this.renderContent()
        ];
    }
}

export default Kontakt;

/*
export default connect(({home:{data}})=>({
    data: data
}),{
    fetchInit
})(Home);
*/