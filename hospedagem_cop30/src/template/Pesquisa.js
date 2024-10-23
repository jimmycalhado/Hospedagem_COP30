import React, { useState } from 'react';
import "./static/Pesquisa.css"

function Pesquisa({ onSearch }) {
    const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query); 
    }
  };
  return (
    <div>
        <form onSubmit={handleSearch} className="search-form">
            <input type='text' value={query}
            onChange={handleInputChange}
            placeholder="Digite sua busca..."
            className="input_pesquisa"/>
            <button type="submit" className="botao_de_pesuisa">Buscar</button>
         </form>
    </div>
  );
}

export default Pesquisa;