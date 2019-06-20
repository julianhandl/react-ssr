// Import react
import React from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import Header from './components/widgets/Header/Header';
import {Footer} from "./components/widgets/Footer";
import {Helmet} from "react-helmet";
import CookiePolicy from './components/widgets/CookiePolicy/CookiePolicy';
const GradientKlein = require("./resources/images/gradient_klein.svg");
const GradientGross = require("./resources/images/gradient_gross.svg");
const GradientSehrGross = require("./resources/images/gradient_sehr_gross.svg");

// initReactFastclick();

// Import routes
import { websiteRoutes } from './Routes';

// Styles
import './global.scss';
import { connect } from 'react-redux';
import { IState } from './reducers/root-reducer';

interface IAppProps {
    location: any;
}

// Defined root app
// WARNING: Do not connect this component to redux.
// otherwise the router will not work
class AppClass extends React.Component<IAppProps>{
    componentDidUpdate(prevProps: IAppProps) {
        if(prevProps.location.pathname !== this.props.location.pathname) {
            window.scrollTo(0, 0);
        }
    }
    render(){
        // Render routes
        return (<div>
            <div className="background-container">
                <img src={GradientKlein} className="background background--klein" />
                <img src={GradientGross} className="background background--gross" />
                <img src={GradientSehrGross} className="background background--sehr-gross" />
            </div>
            <Helmet>
                <link rel="apple-touch-icon" sizes="180x180" href={require("./resources/meta/apple-touch-icon.png")} />
                <link rel="icon" type="image/png" sizes="32x32" href={require("./resources/meta/favicon-32x32.png")} />
                <link rel="icon" type="image/png" sizes="16x16" href={require("./resources/meta/favicon-16x16.png")} />
                <link rel="manifest" href={require("./resources/meta/site.webmanifest")} />
                <link rel="mask-icon" href={require("./resources/meta/safari-pinned-tab.svg")} color="#5bbad5" />
                <meta name="msapplication-TileColor" content="#2b5797" />
                <meta name="theme-color" content="#ffffff" />

                <title>Party Partner - mieten Sie was sonst verstauben würde</title>
                <meta name="description" content="Party Partner ist der Partyverleih für Ihr Event. Von Musikanlage bis Zelt." />
                <link rel="canonical" href="https://partypartner.at/" />
                <meta name="robots" content="index,follow" />

                <meta property="og:title" content="Party Partner - mieten Sie was sonst verstauben würde"/>
                <meta property="og:description" content="Party Partner ist der Partyverleih für Ihr Event. Von Musikanlage bis Zelt." />
                <meta property="og:urls" content="https://partypartner.at" />

                <script type="application/ld+json">{`
                    { "@context" : "http://schema.org",
                    "@type" : "Organization",
                    "legalName" : "Party Partner, Julian Handl",
                    "url" : "https://partypartner.at/",
                    "contactPoint" : [{
                        "@type" : "ContactPoint",
                        "telephone" : "+43-677-63167169",
                        "email" : "office@partypartner.at",
                        "contactType" : "customer service"
                    }],
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Erlauf, Austria",
                        "postalCode": "3253",
                        "streetAddress": "Dreihäuslweg 2"
                    },
                    "logo" : "https://consensio-grafikdesign.at/public/images/logo.svg"
                    }`}
                </script>
            </Helmet>
            <Header />
            <Switch>
                {websiteRoutes.map((route, i) => <Route key={i} exact={route.exact} path={route.path} component={route.component} />)}
            </Switch>
            <Footer />
            <CookiePolicy />
        </div>);
    }
}

function mapStateToProps(state: IState) : IAppProps {
    return {
        location: state.router.location
    }
}

const App = withRouter(connect(mapStateToProps, () => ({}))(AppClass));

export {
    websiteRoutes,
    App
};