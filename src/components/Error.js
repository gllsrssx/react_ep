import React from 'react';

function Error({ setCurrentComponent }) {
    return (
        <div>
            <h1>Error</h1>
            <p>Sorry, something went wrong.</p>
            <button onClick={() => setCurrentComponent('home')}>Go Back</button>
        </div>
    );
}

export default Error;