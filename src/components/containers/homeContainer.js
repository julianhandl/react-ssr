import React from 'react';
import Home from '../pages/Home';
import {connect} from 'react-redux';

import {fetchInit} from '../../actions/home';

export class Page extends React.Component {
    componentDidMount(){
        if(!this.props.data && this.props.fetchInit){
            this.props.fetchInit();
        }
    }
    renderLoading = () => {
        return (
            <div className="loading">
                Laden
                <div className="loading__animation"></div>
            </div>
        );
    }
    renderError = () => {
        return (
            <div className="error">
                <h1>Sorry...</h1>
                <p>Hier ist etwas schief gegangen. Versuchen Sie es mit neu laden.</p>
            </div>
        )
    }
    render() {
        if(this.props.loading) {
            return(
                <div className="page page--loading">
                    {this.renderLoading()}
                </div>
            );
        }
        else if(!this.props.data) {
            return(
                <div className="page page--error">
                    {this.renderError()}
                </div>
            );
        }
        else {
            return(
                <div className="page page--home">
                    <Home {...this.props} />
                </div>
            );
        }
    }
}

export default connect(({home:{data, loading}})=>({
    data,
    loading
}),{
    fetchInit
})(Page);