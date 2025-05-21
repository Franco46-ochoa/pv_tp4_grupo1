import React, { useState,useEffect } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import SearchBar from "./Components/SearchBar";

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
    {/* HEADER fuera del contenedor central */}
    <header style={{
      backgroundColor: "#007bff",
      color: "white",
      padding: "30px 10px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ margin: "0", fontSize: "2.5rem" }}>Gestión de productos</h1>
        <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
          Trabajo Práctico Nº4 - Programación Visual
        </p>
      </div>
    </header>

    {/* MAIN centrado con ancho limitado */}
    <main style={{
      padding: "30px",
      maxWidth: "800px",
      margin: "0 auto",
      flexGrow: 1
    }}>
      <ProductForm
        Productos={[Productos, setProductos]}
        nuevoProducto={[productoEditando, setProductoEditando]}
      />
      <SearchBar />
      <ProductList
        productos={Productos}
        onEdit={(producto) => setProductoEditando(producto)}
        onDelete={handleDelete}
      />
    </main>

    {/* FOOTER fuera del main, ancho total */}
    <footer style={{
      backgroundColor: "#f1f1f1",
      color: "#333",
      padding: "15px",
      textAlign: "center"
    }}>
      <div style={{ maxWidth: "100%", margin: "0 auto" }}>
        <p style={{ margin: 0 }}>
          © 2025 Grupo 999 - Facultad de Ingeniería
        </p>
      </div>
    </footer>
  </div>
);



}
export default App;
