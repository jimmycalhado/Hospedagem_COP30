import React from 'react';
import "./static/Header.css"

function Header() {
  return (
    <header>
      <nav>
        <ul className='menu'>
          <li>Login/Cadastro</li>
          <li>Reservas de Hospedagem</li>
          <li>Cadastrar Hospedagem</li>
          <li>Suporte ao Visitante</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;