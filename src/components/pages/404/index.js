import React from 'react';
import {Link} from 'react-router-dom';

export class NotFound extends React.Component{
    render(){
        return(
            <div className="page page--404">
                <h1>404</h1>
            </div>
        );
    }
}

export default NotFound;