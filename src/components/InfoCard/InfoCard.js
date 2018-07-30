import React from 'react';
import "./InfoCard.css";
import img from "../../imgs/profile.jpg";

const InfoCard = props => {
        return (
            <div className="card card-info">

                <h1 className="card-title">About Me</h1>
                <hr />
                <div className="row">
                    <div className="col-sm-4">
                        <div className="img-container">
                            <img id="prof-pic" alt="me" src={img} />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <p className="bio">After graduating from California Polytechnic University, San Luis Obsipo with a Bachelor's of Science in Biological Sciences, I decided it was time for a change. I was on the pre-med track throughout undergrad and was on my way to applying to medical school. During this journey, I came to the realization that this was no longer the path for me and I could no longer simply ignore the passion I have for technology and innovation that only grew stronger as I got older. Thus I decided to attend The Coding Bootcamp at University of California, San Diego to turn that passion into a career.</p>
                        
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-12">
                <p className="bio">Through the Bootcamp, I was able to develop skills that allow me to build full stack web applications. The technologies I learned were HTML5, CSS, Javascript, jQuery, Node.js, React.js, Express.js, Handlebars.js, Passport, JSON Web Tokens, MySQL (including Sequelize CLI), MongoDB (including Mongoose), and various CSS libraries (Bootstrap, Materialize).</p>
                </div>
                </div>
                <div className="row">
                <div className="col-sm-12">
                    <p className="bio">My design style tends to be simplistic, yet elegant. I enjoy challenging myself by implimenting complex transitions and functions into the applications I build. I am constantly researching new technologies that I can then impliment in the applications I build.</p>
                </div>
                </div>
            </div>
            
            
        )
    };


export default InfoCard;