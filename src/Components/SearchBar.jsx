import React from 'react';

function SearchBar(props) {
  const [descripcion, setDescripcion] = props.descripcion;
  const [modo, setModo] = props.modo;

  return (
    <div>
      <div>
        <button onClick={() => setModo('lista')}>Lista</button>
        <button onClick={() => setModo('nuevo')}>Agregar</button>
      </div>
      <div>
        <input
          type='text'
          placeholder='Buscar producto...'
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button onClick={props.handleBuscarProducto}>Buscar</button>
      </div>
    </div>
  );
}

export default SearchBar;
