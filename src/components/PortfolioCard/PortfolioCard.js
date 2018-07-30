import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "./PortfolioCard.css";
import ww from "../../imgs/ww.png";
import eventsms from "../../imgs/eventsms.png";
import bamazon from "../../imgs/bamazoncustomer1.png";
import clickgame from "../../imgs/clickgame.png";
import nyscraper from "../../imgs/nyscraper.png";
import burger from "../../imgs/burger.png";


const PortfolioCard = props => {
    return (
        <div>
            <div className="card card-info">
                <h1 className="card-title">Portfolio</h1>
                <hr />
                <p className="portfolio-title">Below are some of my many projects. Check my Github for more!</p>
                <div className="row">
                    <div className="col-md-4">
                        <a href="https://weekendwanderer.herokuapp.com" target="_blank" rel="noopener noreferrer"><img id="thumbnails" alt="ww" src={ww} /></a>
                    </div>
                    <div className="col-md-8">
                        <h1 className="blurb-title">Weekend Wanderer</h1>
                        <p className="blurb">Weekend Wanderer is a travel application tailored towards younger generations in need of weekend getaways. This full MERN stack application incorporates various APIs to deliver users information in a fun, user-friendly manner.</p>
                        <a id="codelinks" href="https://github.com/Weekend-Wanderer/WWApp" target="_blank" rel="noopener noreferrer">Github</a><a id="codelinks" href="https://weekendwanderer.herokuapp.com" target="_blank" rel="noopener noreferrer">  Deployed Site</a>
                    </div>

                </div>
                <div className="row">


                    <div className="col-md-4">
                        <a href="https://scraperhw1.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="thumbnails" alt="nyscraper" src={nyscraper} /></a>
                    </div>
                    <div className="col-md-8">
                        <h1 className="blurb-title">New York Times Scraper</h1>
                        <p className="blurb">NYT Scraper is a full MERN stack application that scrapes the NYT home page for content. Scraped content is placed in a MongoDB database and then displayed to user on the page. User can remove individual articles, make notes on articles, and remove all articles from the database. </p>
                        <a id="codelinks" href="https://github.com/michaeljohnson729/nytreact" target="_blank" rel="noopener noreferrer">Github</a><a id="codelinks" href="https://scraperhw1.herokuapp.com/" target="_blank" rel="noopener noreferrer">  Deployed Site</a>
                    </div>


                </div>
                <div className="row">


                    <div className="col-md-4">
                        <a href="https://event-sms.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="thumbnails" alt="eventsms" src={eventsms} /></a>
                    </div>
                    <div className="col-md-8">
                        <h1 className="blurb-title">EventSMS</h1>
                        <p className="blurb">EventSMS is an application built to suggest users with things to do and places to eat. EventSMS uses a MySQL database and JavaScript frameworks Handlebars.js and Passport.js to store, secure, and display user information. Yelp and Meetup APIs are used to provide suggestions. Twilio integration allows for SMS to be sent to users.</p>
                        <a id="codelinks" href="https://github.com/davidlatuno/event-project" target="_blank" rel="noopener noreferrer">Github</a><a id="codelinks" href="https://event-sms.herokuapp.com/" target="_blank" rel="noopener noreferrer">  Deployed Site</a>
                    </div>

                </div>
                <div className="row">

                    <div className="col-md-4">
                        <a href="https://github.com/michaeljohnson729/Bamazon" target="_blank" rel="noopener noreferrer"><img id="thumbnails" alt="bamazon" src={bamazon} /></a>
                    </div>
                    <div className="col-md-8">
                        <h1 className="blurb-title">Bamazon</h1>
                        <p className="blurb">Bamazon is a Node.js CLI application meant to mimick an internet store. The CLI interacts with a MySQL database that allows it to keep track of changes made when users "buy" something. In addition to a "customer" mode, a "manager" mode enables manipulation of the MySQL database.</p>
                        <a id="codelinks" href="https://github.com/michaeljohnson729/Bamazon" target="_blank" rel="noopener noreferrer">Github</a>
                    </div>

                </div>
                <div className="row">

                    <div className="col-md-4">
                        <a href="https://gameofclicks.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="thumbnails" alt="clickgame" src={clickgame} /></a>
                    </div>
                    <div className="col-md-8">
                        <h1 className="blurb-title">Game of Clicks</h1>
                        <p className="blurb">Game of Clicks is a game similar to Memory. This application uses React.js to show a player cards with images that rearrange themselves after a user clicks on one of the cards. The player's current and top scores are tracked using states.</p>
                        <a id="codelinks" href="https://github.com/michaeljohnson729/clicky-game" target="_blank" rel="noopener noreferrer">Github</a><a id="codelinks" href="https://gameofclicks.herokuapp.com/" target="_blank" rel="noopener noreferrer">  Deployed Site</a>
                    </div>
                    


                </div>
                <div className="row">

                    <div className="col-md-4">
                        <a href="https://burgersapphw.herokuapp.com/" target="_blank" rel="noopener noreferrer"><img id="thumbnails" alt="burger" src={burger} /></a>
                    </div>
                    <div className="col-md-8">
                        <h1 className="blurb-title">Eat-Da-Burger</h1>
                        <p className="blurb">Eat-Da-Burger is simple full stack application built using the MVC model and uses a MySQl database to store "eaten burgers." Users can add burgers and then "eat" them which manipulates the MySQL database and changes where they appear on the page.</p>
                        <a id="codelinks" href="https://github.com/michaeljohnson729/burger" target="_blank" rel="noopener noreferrer">Github</a><a id="codelinks" href="https://burgersapphw.herokuapp.com/" target="_blank" rel="noopener noreferrer">  Deployed Site</a>
                    </div>
                    


                </div>

            </div>

        </div>
    )
};

export default PortfolioCard;