import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {homeSetInitialData} from '../../../actions/home';

import './Home.scss';

@connect(({home:{data}})=>({
    data: data
}),{
    homeSetInitialData
})
export default class Home extends React.Component{
    componentDidMount(){
        if(!this.props.data){
            this.props.homeSetInitialData();
        }
    }
    render(){
        return(
            <div className="page">
                <h1>Home</h1>
                <p>
                    This is the bestit boilerplate for react serverside rendering.<br />
                    Feel free to extend and change this project to create your own app.<br />
                    Here's a list of Star Wars characters to show how async data loading is done:
                </p>
                <h2>People</h2>
                {this.props.data ?
                <ul>
                    {this.props.data.map(p => (
                        <li key={p.name}>{p.name}</li>
                    ))}
                </ul>
                : <span>Loading</span>}
            </div>
        );
    }
}