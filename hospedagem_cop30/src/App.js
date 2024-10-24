import './App.css';
import React from 'react';
import Header from './template/Header.js';
import cop30 from './image/cop30.jpg'
import Pesquisa from './template/Pesquisa.js';
import Hotel from  './template/HotelList.js';
import maiorana from './image/maiorana.png';
import holidayinn from './image/holidayinn.png';
import andrade from './image/andradedocas.png';
import mercure from './image/mercure.png';


function App() {

  const hotels = [
    { id: 1, img:maiorana, name: 'Radisson Hotel Maiorana Belém', nota:8.8, location: 'Belém-Nazaré', price: 728.00 },
    { id: 2, img:andrade, name: 'Rede Andrade Docas', nota:8.6, location: 'Florianópolis', price: 379.00 },
    { id: 3, img:holidayinn, name: 'Holiday Inn Express', nota:8.6, location: 'Ananindeua', price: 289.00 },
    { id: 4, img:mercure, name: "Mercure Belém Boulevard", nota:8.4, location: 'Umarizal', price: 467.00 }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <img src={cop30} className='imgcop30'/>
      </main>
      <h1>PESQUISE HOTÉIS</h1>
      <Pesquisa />
      <div className='lista-hoteis'>
        <h3>Hospedagens</h3>
        <Hotel hotels={hotels} />
      </div>
    </div>
  );
}

export default App;
