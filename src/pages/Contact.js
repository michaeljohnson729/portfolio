import React, { Component } from 'react';
import NavBar from "../components/NavBar";
import ContactCard from "../components/ContactCard";

class Contact extends Component {

    render() {
        return (
            <div>
                <NavBar />
                <ContactCard />
            </div>)
    }
}

export default Contact;
