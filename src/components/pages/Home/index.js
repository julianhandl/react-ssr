import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {homeSetInitialData} from '../../../actions/home';

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
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to="/about">About</Link></li>
                </ul>
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