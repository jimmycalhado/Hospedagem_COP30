import './App.css';
import React from 'react';
import Header from './template/Header.js';
import cop30 from './image/cop30.jpg'
import Pesquisa from './template/Pesquisa.js';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <img src={cop30} className='imgcop30'/>
      </main>
      <Pesquisa />
    </div>
  );
}

export default App;
