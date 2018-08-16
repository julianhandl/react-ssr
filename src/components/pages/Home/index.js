import React from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import {fetchInit} from '../../../actions/home';

import './Home.scss';

export class Home extends React.Component{
    componentDidMount(){
        if(!this.props.data && this.props.fetchInit){
            this.props.fetchInit();
        }
    }
    renderContent = () => {
        return (
            <div className="home-content" key="home-content-key">
                <h1>Home</h1>
                <p>
                    This is a boilerplate for react serverside rendering.<br />
                    Feel free to extend and change this project to create your own app.<br />
                    Here's a list of Star Wars characters to show how async data loading is done:
                </p>
                <h2>People</h2>
                {this.props.data ?
                <ul className="list">
                    {this.props.data.map(p => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul> : null}
            </div>
        );
    }
    render(){
        return[
            <Helmet key='helmet-key-home'>
                <title>Home</title>
                <meta name="description" content="Das ist die Home Seite" />
            </Helmet>,
            this.renderContent()
        ];
    }
}

export default connect(({home:{data}})=>({
    data: data
}),{
    fetchInit
})(Home);
