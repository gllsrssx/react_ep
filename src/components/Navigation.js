import React, { useState, useEffect } from 'react';
import Homepage from './Homepage';
import {TicketMenu} from './TicketMenu';
import {Faq} from './Faq';
import {ContactUs} from "./ContactUs";
import {Reviews} from "./Reviews";
import Socials from "./Socials";
import Error from "./Error";
import Donate from "./Donate";

export function Navigation() {
    const [currentComponent, setCurrentComponent] = useState(localStorage.getItem('currentComponent') || 'home');

    useEffect(() => {
        localStorage.setItem('currentComponent', currentComponent);
    }, [currentComponent]);

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
            case 'donate':
                return <Donate />;
            default:
                return <Error setCurrentComponent={setCurrentComponent} />;
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
                <button className="navigationButton" onClick={() => setCurrentComponent('donate')}>Donate</button>
            </nav>
            {renderComponent()}
        </div>
    );
}