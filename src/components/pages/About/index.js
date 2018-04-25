import React from 'react';
import {Helmet} from "react-helmet";

import './About.scss';

export class About extends React.Component{
    render(){
        return(
            <div className="page page--about">
                <Helmet>
                    <title>About</title>
                </Helmet>
                <h1>About</h1>
            </div>
        );
    }
}

export default About;