import React from 'react';
import Header from './components/Header.jsx';
import Aside from './components/Aside.jsx';
import LogoP from './assets/imagenes/logo.jpg'

import Footer from './components/Footer.jsx';

import './App.css'
import Carrusel from './components/Carrusel.jsx';

function App() {
    return(
        <div className="App">

            <div className='containerHeader'>
                <Header                
                logo={LogoP}                
                title={'un sabor irresistible'}
                />
            </div>

            <div className='containerCarrusel' >
                <Carrusel />
            </div>

            <div className="containerAside">
                <Aside />                
            </div>
            <div className='containerFooter'>
                <Footer />
            </div>
        </div>
        
    );
}

export default App
