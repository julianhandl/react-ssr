import React from 'react';
import {Helmet} from "react-helmet";
import './HomeStyles.scss';
import HomeIntro from "./HomeIntro";
import HomeDescription from './HomeDescription';
import HomeDelivery from './HomeDelivery';

export class Home extends React.Component<any, {}>{
    renderContent = () => {
        return (
            <section className="page page--home" key="page-home-key">
                <HomeIntro />
                <HomeDescription />
                <HomeDelivery />
            </section>
        );
    }
    render(){
        return[
            <Helmet key='helmet-key-home'>
                <title>Home | Party Partner</title>
                <meta name="description" content="Party Partner ist Ihre persönlische Party Vermietung. Von Musikanlagen bis Zelten für Ihre perfekte Veranstaltung." />
            </Helmet>,
            this.renderContent()
        ];
    }
}

export default Home;

/*
export default connect(({home:{data}})=>({
    data: data
}),{
    fetchInit
})(Home);
*/