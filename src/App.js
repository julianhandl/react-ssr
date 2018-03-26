// Import react
import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {setWebsiteDate} from './actions/website';

// Import main pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import NoMatch from './components/pages/404';

// Defined root app
// connect to redux
@connect(() => ({}),{
    setWebsiteDate
})
export default class App extends React.Component{
    componentWillMount(){
        this.props.setWebsiteDate(new Date());
    }
    render(){
        // Render routes
        return <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route component={NoMatch} />
        </Switch>;
    }
}

module.exports = App;