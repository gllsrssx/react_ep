import React, { useState } from 'react';
import {FILM_DATA} from '../data/data';
import { Ticket } from './Ticket';
import {Cart} from "./Cart";
import {Filter} from "./MovieFilter";

export function TicketMenu() {
    const [originalFilms] = useState(FILM_DATA);
    const [films, setFilms] = useState(FILM_DATA);
    const [selectedFilms, setSelectedFilms] = useState([]);

    function addFilm(film) {
        setSelectedFilms([...selectedFilms, film]);
    }

    function handleFilteredFilms(filteredFilms) {
        setFilms(filteredFilms);
    }

    return (
        <>
            <br/>
            <Filter films={originalFilms} onFilter={handleFilteredFilms} />
            <div className="ticketMenuContainer">
                <div className="filmsContainer">
                    {films.map(film => (
                        <Ticket film={film} addFilm={addFilm} />
                    ))}
                </div>
                {selectedFilms.length !== 0 && <Cart films={selectedFilms} />}
            </div>
        </>
    );
}