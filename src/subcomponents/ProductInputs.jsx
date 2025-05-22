import React from 'react';

function ProductInputs({ Descripcion, setDescripcion, precioUnitario, setprecioUnitario, stock, setstock, handleSubmit, botonTexto }) {

  return (
    <form onSubmit={handleSubmit}>
      <div>
          <label>Descripción:</label>
          <input style={{margin:"15px 25px"}} type="text" value={Descripcion} placeholder="Descripción" autoFocus onChange={e => setDescripcion(e.target.value)}/>
          <br />
          <label>Precio: $</label>
          <input style={{margin:"15px 25px"}} type="number" value={precioUnitario} onChange={e => setprecioUnitario(parseFloat(e.target.value))}/>
          <br />
          <label>Existencias:</label>
          <input style={{margin:"15px 25px"}} type="number" value={stock} onChange={e => setstock(parseInt(e.target.value))}/>
          <br />
      </div>
      <button type="submit">{botonTexto}</button>
    </form>
  );
}

export default ProductInputs;
