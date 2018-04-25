import React from 'react';
import {Helmet} from "react-helmet";
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {homeSetInitialData} from '../../../actions/home';

import './Home.scss';

export class Home extends React.Component{
    componentDidMount(){
        if(!this.props.data && this.props.homeSetInitialData){
            this.props.homeSetInitialData();
        }
    }
    render(){
        return(
            <div className="page page--home">
                <Helmet>
                    <title>Home</title>
                </Helmet>
                <h1>Home</h1>
                <p>
                    This is the bestit boilerplate for react serverside rendering.<br />
                    Feel free to extend and change this project to create your own app.<br />
                    Here's a list of Star Wars characters to show how async data loading is done:
                </p>
                <h2>People</h2>
                {this.props.data ?
                <ul className="list">
                    {this.props.data.map(p => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul>
                : <span className="loading">Loading</span>}
            </div>
        );
    }
}

export default connect(({home:{data}})=>({
    data: data
}),{
    homeSetInitialData
})(Home);
