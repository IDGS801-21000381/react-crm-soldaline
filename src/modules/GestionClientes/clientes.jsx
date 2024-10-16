import React, { useState } from 'react';
import './Clientes.css';

const Clientes = () => {
  const [filter, setFilter] = useState('destacados');
  const [searchTerm, setSearchTerm] = useState('');

  const clientes = [
    { id: 1, nombre: 'Cliente A', tipo: 'destacado' },
    { id: 2, nombre: 'Cliente B', tipo: 'potencial' },
    { id: 3, nombre: 'Cliente C', tipo: 'destacado' },
    { id: 4, nombre: 'Cliente D', tipo: 'potencial' },
  ];

  const filteredClientes = clientes.filter(
    cliente =>
      cliente.tipo === filter &&
      cliente.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="clientes-container">
      <div className="clientes-header">
        <input
          type="text"
          className="clientes-search"
          placeholder="Buscar clientes ya registrados"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn nuevo-btn">Nuevo</button>
      </div>

      <div className="clientes-filters">
        <button
          className={`filter-btn ${filter === 'destacados' ? 'active' : ''}`}
          onClick={() => setFilter('destacados')}
        >
          Clientes Destacados
        </button>
        <button
          className={`filter-btn ${filter === 'potencial' ? 'active' : ''}`}
          onClick={() => setFilter('potencial')}
        >
          Clientes Potenciales
        </button>
      </div>

      <div className="clientes-grid">
        {filteredClientes.map((cliente) => (
          <div key={cliente.id} className="cliente-card">
            <p>{cliente.nombre}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clientes;
