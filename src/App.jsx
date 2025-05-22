import React, { useState, useEffect } from 'react';
import ProductForm from './Components/ProductForm';
import ProductList from './Components/ProductList';
import SearchBar from './Components/SearchBar';
import Header from './subcomponents/Header';
import Footer from './subcomponents/Footer';
import Main from './subcomponents/Main';

function App() {
  const [Productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const [productoBuscado, setProductoBuscado] = useState([]);
  const [descripcion, setDescripcion] = useState('');
  const [modo, setModo] = useState('lista');

  useEffect(() => {
    console.log('Productos actualizados:', Productos);
  }, [Productos]);

  const handleDelete = (id) => {
    const nuevosProductos = Productos.filter((p) => p.Id !== id);
    setProductos(nuevosProductos);
  };

  const handleEdit = (producto) => {
    setProductoEditando(producto);
    setModo('nuevo');
  };

  const handleBuscarProducto = () => {
    setProductoBuscado(
      Productos.filter((producto) => producto.Descripcion === descripcion),
    );
    setModo('buscar');
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header />

      <Main>
        <SearchBar descripcion={[descripcion, setDescripcion]} modo={[modo, setModo]} handleBuscarProducto={handleBuscarProducto} />

        {(() => {
          switch (modo) {
            case 'lista':
              return <ProductList productos={Productos} onEdit={handleEdit} onDelete={handleDelete} />;
            case 'buscar':
              return <ProductList productos={productoBuscado} modo={[modo, setModo]} onEdit={handleEdit} onDelete={handleDelete} />;
            case 'nuevo':
              return <ProductForm Productos={[Productos, setProductos]} nuevoProducto={[productoEditando, setProductoEditando]} modo={[modo, setModo]} />
          }
        })()}

      </Main>
      <Footer />
    </div>
  );
}
export default App;
