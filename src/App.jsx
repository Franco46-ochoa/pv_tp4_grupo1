import React, { useState,useEffect } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
import Main from "./subcomponents/Main";

function App() {
 const [Productos, setProductos] = useState([]);
 const [productoEditando, setProductoEditando] = useState(null);


 useEffect(() => {
    console.log("Productos actualizados:", Productos);
  }, [Productos]);
  const handleDelete = (id) => {
  const nuevosProductos = Productos.filter(p => p.Id !== id);
  setProductos(nuevosProductos);
};

  return (
  <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />

    <Main>
      <ProductForm Productos={[Productos, setProductos]} nuevoProducto={[productoEditando, setProductoEditando]}/>
      <SearchBar />
      <ProductList  productos={Productos} onEdit={(producto) => setProductoEditando(producto)} onDelete={handleDelete} />
    </Main>


    <Footer />
  </div>
);

}
export default App;
