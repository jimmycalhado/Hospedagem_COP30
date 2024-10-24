import React from 'react';
import "./static/HoltelList.css"

function HotelList({ hotels }) {
  return (
    <div className="hotel-list">
      {hotels.map((hotel) => (
        <div key={hotel.id} className="hotel-card">
            <img src={hotel.img} alt={hotel.name} className="hotel-img" />
            <div className='conteudo-hotel'>
                <h2>{hotel.name}</h2>
                <p>Nota: {hotel.nota.toFixed(1)}</p>
                <p>Localização: {hotel.location}</p>
                <p>Preço: R$ {hotel.price.toFixed(2)}</p>
            </div>
        </div>
      ))}
    </div>
  );
}

export default HotelList;