import React, { useState, useEffect } from "react";
import ProductForm from "./Components/ProductForm";
import ProductList from "./Components/ProductList";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";
import Main from "./subcomponents/Main";

function App() {
  const [Productos, setProductos] = useState([]);
  const [productoEditando, setProductoEditando] = useState(null);
  const [productoBuscado, setProductoBuscado] = useState([]);
  const [descripcion, setDescripcion] = useState("");
  const [modo, setModo] = useState("lista");
  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  useEffect(() => {
    console.log("Productos actualizados:", Productos);
  }, [Productos]);

  const handleDelete = (id) => {
    const nuevosProductos = Productos.filter((p) => p.Id !== id);
    setProductos(nuevosProductos);
  };

  const handleBuscarProducto = () => {
    setProductoBuscado(
      Productos.filter(
        (producto) =>
          producto.Descripcion.toLowerCase() === descripcion.toLowerCase()
      )
    );
    setModo("buscar");
    setMostrarFormulario(false);
  };

  const handleAgregar = () => {
    setProductoEditando(null);
    setMostrarFormulario(true);
    setModo("agregar");
  };

  const handleListar = () => {
    setMostrarFormulario(false);
    setModo("lista");
  };

  return (
    <div
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      <Header
        onAgregar={handleAgregar}
        onListar={handleListar}
        descripcion={[descripcion, setDescripcion]}
        handleBuscarProducto={handleBuscarProducto}
      />

      <Main>
        {modo !== "agregar" && (
          <ProductList
            productos={modo === "buscar" ? productoBuscado : Productos}
            onEdit={(producto) => {
              setProductoEditando(producto);
              setMostrarFormulario(true);
              setModo("agregar");
            }}
            onDelete={handleDelete}
          />
        )}

        {mostrarFormulario && (
          <ProductForm
            Productos={[Productos, setProductos]}
            nuevoProducto={[productoEditando, setProductoEditando]}
            setMostrarFormulario={setMostrarFormulario}
            setModo={setModo}
          />
        )}
      </Main>

      <Footer />
    </div>
  );
}

export default App;
