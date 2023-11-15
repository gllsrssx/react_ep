import React, { useState } from 'react';

export function Filter({ films }) {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredFilms = films
        .filter(film => film.name.toLowerCase().includes(searchTerm.toLowerCase()))

    return (
        <div className="filterContainer">
            <input className="filterSearch" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchTermChange} />
        </div>
    );
}
