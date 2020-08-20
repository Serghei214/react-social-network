import React from 'react';
import './App.css';
import {Navbar} from './components/Navbar';
import {Header} from './components/Header';
import {Profile} from './components/Profile';
import {setFlagsFromString} from "v8";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar />
            <Profile />
            <Navbar />


        </div>
    );
}

export default App;