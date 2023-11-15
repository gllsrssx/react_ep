import React from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { db } from './firebase'
import { uid } from "uuid"

function App() {
    return (
        <div>
            <Navigation />
            <Footer />
        </div>
    );
}

export default App;
