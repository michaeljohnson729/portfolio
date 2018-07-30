import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "react-bootstrap";
import slide1 from '../imgs/1.jpg';
import slide2 from '../imgs/2.jpg';
import slide3 from '../imgs/3.jpg';
import slide4 from '../imgs/4.jpg';
import slide5 from '../imgs/5.jpg';
import slide6 from '../imgs/6.jpg';
import slide7 from '../imgs/7.jpg';
import slide8 from '../imgs/8.jpg';
import "./Home.css";

class Home extends Component {

    render() {
        return (
            <div>

                <Carousel>
                    <Carousel.Item>
                        <img className="slide1" alt="one" src={slide1} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="slide2" alt="two" src={slide2} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="slide3" alt="three" src={slide3} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="slide4" alt="four" src={slide4} />
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="slide5" alt="five" src={slide5} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide6" alt="six" src={slide6} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide7" alt="seven" src={slide7} />

                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="slide8" alt="eight" src={slide8} />

                    </Carousel.Item>

                </Carousel>

                <div className="title-container">
                    <h1 className="title-header">Michael Johnson</h1>
                    <div className="title-links">
                        <Link to="/about"><span><button className="about-button">About</button></span></Link>
                        <Link to="/portfolio"><span><button className="portfolio-button">Portfolio</button></span></Link>
                        <Link to="/contact"><span><button className="contact-button">Contact</button></span></Link>
                    </div>
                </div>


            </div >)
    }
}

export default Home;
