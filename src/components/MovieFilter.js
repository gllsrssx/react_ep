import React, { useState, useEffect } from 'react';

export function Filter({ films, onFilter }) {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        if (searchTerm === '') {
            onFilter(films);
        } else {
            const filteredFilms = films
                .filter(film => film.name.toLowerCase().includes(searchTerm.toLowerCase()));
            onFilter(filteredFilms);
        }
    }, [searchTerm, films, onFilter]);

    const handleSearchTermChange = (event) => {
        setSearchTerm(event.target.value);
    };

    return (
        <input className="filterSearch" type="text" placeholder="Search..." value={searchTerm} onChange={handleSearchTermChange} />
    );
}