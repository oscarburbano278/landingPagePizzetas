import React from 'react';
import Header from './components/Header.jsx';
import Aside from './components/Aside.jsx';
import Logo from '../assets/imagenes/logo.jpg'

import Footer from './components/Footer.jsx';

import './App.css'
import Carrusel from './components/Carrusel.jsx';

function App() {
    return(
        <div className="App">
            <Header />
            <Carrusel />
            <div className="content">
                <Aside />
                
            </div>
            <Footer />
        </div>
        
    );
}

export default App
