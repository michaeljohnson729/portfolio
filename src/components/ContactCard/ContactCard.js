import React from 'react';
import facebook from "../../imgs/facebook.png";
import linkedin from "../../imgs/linkedin.png";
import github from "../../imgs/github.png";
import gmail from "../../imgs/gmail.png";
import phone from "../../imgs/phone.png";
import internet from "../../imgs/internet.png";
import "./ContactCard.css";

const ContactCard = props => {
    return (
        <div className="card card-info">
            <h1 className="card-title">Contact</h1>
            <hr />
            <div>
            <div className="row">
                    <div className="col-sm-4">
                        <img id="logos" alt="internet" src={internet} />
                    </div>
                    <div className="col-sm-8">
                        <a href="http://michaelpjohnson.net" target="_blank" rel="noopener noreferrer"><h1 className="profile-links">michaelpjohnson.net</h1></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img id="logos" alt="github" src={github} />
                    </div>
                    <div className="col-sm-8">
                        <a href="https://github.com/michaeljohnson729" target="_blank" rel="noopener noreferrer"><h1 className="profile-links">michaeljohnson729</h1></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img id="logos" alt="linkedin" src={linkedin} />
                    </div>
                    <div className="col-sm-8">
                        <a href="https://www.linkedin.com/in/michael-johnson-76a791b1/" target="_blank" rel="noopener noreferrer"><h1 className="profile-links">Michael Johnson</h1></a>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-4">
                        <img id="logos" alt="gmail" src={gmail} />
                    </div>
                    <div className="col-sm-8">
                        <a href="mailto:michaeljohnson729@gmail.com"><h1 className="profile-links">michaeljohnson729@gmail.com</h1></a>
                    </div>
                </div><div className="row">
                    <div className="col-sm-4">
                        <img id="phone-logo" alt="phone" src={phone} />
                    </div>
                    <div className="col-sm-8">
                        <h1 className="profile-links">619-788-3033</h1>
                    </div>
                </div>


                <div className="row">
                    <div className="col-sm-4">
                        <img id="logos" alt="facebook" src={facebook} />
                    </div>
                    <div className="col-sm-8">
                        <a href="https://www.facebook.com/profile.php?id=100001345067559" target="_blank" rel="noopener noreferrer"><h1 className="profile-links">Michael Johnson</h1></a>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default ContactCard;