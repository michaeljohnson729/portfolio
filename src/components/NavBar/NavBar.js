import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";


class NavBar extends Component {
    render() {
        return (<nav className="navbar navbar-custom bg-dark">
            <Link to="/" ><h1 className="navbar-brand">Michael Johnson</h1></Link>
            <div className="links">
                <Link to="/about"><span><button className="about-button">About</button></span></Link>
                <Link to="/portfolio"><span><button className="portfolio-button">Portfolio</button></span></Link>
                <Link to="/contact"><span><button className="contact-button">Contact</button></span></Link>
            </div>
        </nav>)

    }
}
;

export default NavBar;
