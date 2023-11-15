import React, { useState } from 'react';
import Homepage from './Homepage';
import {TicketMenu} from './TicketMenu';
import {Faq} from './Faq';
import {ContactUs} from "./ContactUs";
import {Reviews} from "./Reviews";
import Socials from "./Socials";

export function Navigation() {
    const [currentComponent, setCurrentComponent] = useState('home');

    function renderComponent() {
        switch (currentComponent) {
            case 'home':
                return <Homepage />;
            case 'tickets':
                return <TicketMenu />;
            case 'faq':
                return <Faq />;
            case 'contactus':
                return <ContactUs />;
            case 'socials':
                return <Socials />;
            case 'reviews':
                return <Reviews />;
        }
    }

    return (
        <div className="navigationContainer">
            <nav className="navigationBar">
                <button className="navigationButton" onClick={() => setCurrentComponent('home')}>Home</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('tickets')}>Movies</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('faq')}>FAQ</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('contactus')}>Contact</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('socials')}>Socials</button>
                <button className="navigationButton" onClick={() => setCurrentComponent('reviews')}>Reviews</button>

            </nav>
            {renderComponent()}
        </div>
    );
}