import React from 'react'

function SearchBar(props) {
  const [descripcion, setDescripcion] = props.descripcion;
  /* const [modo, setModo] = props.modo; */

  return (
    <div>
      <input type="text" placeholder="Buscar producto..." value={descripcion} onChange={(e) => setDescripcion(e.target.value)} />
      <button onClick={props.handleBuscarProducto}>Buscar</button>
    </div>
  )
}

export default SearchBar