import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import PortfolioCard from "../components/PortfolioCard";

class Portfolio extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <PortfolioCard />

            </div>)
    }
}

export default Portfolio;
