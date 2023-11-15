import React from 'react';

export function Faq() {
    return (
        <div className="faqContainer">
            <h1 className="faqHeader">Frequently Asked Questions</h1>
            <div className="questionContainer">
                <h2 className="question">How do I rent a movie?</h2>
                <p className="answer">Ga naar onze bibliotheek om een film te huren. Klik op de film die je wilt huren en daarna op de knop "Huur". Zo voeg je de film toe aan je winkelwagen. Als je alle films hebt geselecteerd die je wilt huren, ga je naar de kassa om je transactie te voltooien.</p>
            </div>
            <div className="questionContainer">
                <h2 className="question">How do I return a rented movie?</h2>
                <p className="answer">Voor het teruggeven van een gehuurde film, log je in op je account en ga je naar je verhuurgeschiedenis. Selecteer de film die je wilt teruggeven en klik op de "Teruggeven" knop.</p>
            </div>
            <div className="questionContainer">
                <h2 className="question">What is the rental period?</h2>
                <p className="answer">De huurperiode is de hoeveelheid tijd dat je hebt om een gehuurde film te kijken voordat deze terug moet worden gegeven. De huurperiode voor onze films is meestal 48 uur.</p>
            </div>
        </div>
    )
}