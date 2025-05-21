import React from 'react';

function ProductItem({ producto, onDelete, onEdit }) {

  return (
    <tr>
      <td>{producto.Descripcion}</td>
      <td>${producto.Precio.toFixed(2)}</td>
      <td>${producto.Descuento.toFixed(2)}</td>
      <td>${producto.PrecioConDescuento.toFixed(2)}</td>
      <td>{producto.Stock}</td>
      <td>
      <button onClick={() => onEdit(producto)}>Editar</button>
      <button onClick={() => onDelete(producto.Id)}>Eliminar</button>
      </td>
    </tr>
  );
}

export default ProductItem;
