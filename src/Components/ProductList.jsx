import React from 'react';
import ProductItem from './ProductItem';

function ProductList({ productos, onDelete, onEdit }) {
  if (!productos || productos.length === 0) {
    return <p>No hay productos para mostrar.</p>;
  }

  return (
    <table border="1" cellPadding="8" cellSpacing="0" style={{ borderCollapse: 'collapse', width: '100%' }}>
      <thead>
        <tr>
          <th>Descripción</th>
          <th>Precio Unitario</th>
          <th>Descuento</th>
          <th>Precio con Descuento</th>
          <th>Stock</th>
          <th>Acciones</th> 
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <ProductItem
            key={producto.Id}
            producto={producto}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductList;

