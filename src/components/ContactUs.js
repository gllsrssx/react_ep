import React from 'react';

export function ContactUs() {
    return (
        <div className="contactUsContainer">
            <h2 className="contactUsTitle">Contact Us</h2>
            <form className="contactUsForm">
                <input type="text" placeholder="Your name" />
                <input type="email" placeholder="Your email" />
                <textarea placeholder="Your message"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}