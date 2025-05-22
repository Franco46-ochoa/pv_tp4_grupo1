import React from 'react';
import "../Css/Style.css";
function ProductInputs({ Descripcion, setDescripcion, precioUnitario, setprecioUnitario, stock, setstock, handleSubmit, botonTexto }) {

  return (
    <form onSubmit={handleSubmit} className='formulario'>
      <div>
          <label>Descripción:</label>
          <input type="text" value={Descripcion} placeholder="Descripción" autoFocus onChange={e => setDescripcion(e.target.value)}/>
          <br />
          <label>Precio: $</label>
          <input type="number" value={precioUnitario} onChange={e => setprecioUnitario(parseFloat(e.target.value))}/>
          <br />
          <label>Existencias:</label>
          <input  type="number" value={stock} onChange={e => setstock(parseInt(e.target.value))}/>
          <br />
      </div>
      <button type="submit">{botonTexto}</button>
    </form>
  );
}

export default ProductInputs;
