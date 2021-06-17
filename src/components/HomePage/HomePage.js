import React, { useState } from 'react';
import Navbar from './Elements/Navbar.js';
import Cards from './Elements/Cards.js';
import firebase from 'firebase';

function HomePage() {
    console.log(localStorage.getItem("token"))
    const db = firebase.firestore()
    

    return (
        <>
            <Navbar />
            <>
                <Cards />
            </>
        </>
    );
}

export default HomePage;