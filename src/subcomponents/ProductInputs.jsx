import React from 'react';

function ProductInputs({ Descripcion, setDescripcion, precioUnitario, setprecioUnitario, stock, setstock, handleSubmit, botonTexto }) {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Producto:</label>
        <input type="text" value={Descripcion} placeholder="Descripción" onChange={e => setDescripcion(e.target.value)}/>
        <br />
        <label>Precio: $</label>
        <input type="number" value={precioUnitario} onChange={e => setprecioUnitario(parseFloat(e.target.value))}/>
        <br />
        <label>Existencias:</label>
        <input type="number" value={stock} onChange={e => setstock(parseInt(e.target.value))}/>
        <br />
        <button type="submit">{botonTexto}</button>
      </div>
    </form>
  );
}

export default ProductInputs;
