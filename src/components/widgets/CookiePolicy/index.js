import React from "react";
import {Link} from 'react-router-dom';
import "./CookiePolicy.scss";

export default class CookiePolicy extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            show: true
        };
    }
    componentDidMount(){
        let localValue = localStorage.getItem("consensio-cookie-policy");
        if(localValue){
            this.setState({ show: false });
        }
    }
    accept = () => {
        localStorage.setItem("consensio-cookie-policy", true);
        this.setState({ show: false });
    }
    render() {
        return (
            <aside className={"cookiePolicy" + (!this.state.show ? ' cookiePolicy--is-hidden' : '' )}>
                Diese Seite verwendet Cookies, um Ihnen das beste Erlebnis zu bieten.
                Surfen Sie weiterhin auf meiner Seite, stimmen Sie der Cookie-Nutzung und
                den <Link to="/impressum">Datenschutzrichtlinien</Link> zu!
                <button onClick={this.accept}>Ok, ich stimme zu!</button>
            </aside>
        );
    }
}