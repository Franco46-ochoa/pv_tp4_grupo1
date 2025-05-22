import React from "react";
import "../Css/Style.css";

function Header({ onAgregar, onListar, descripcion, handleBuscarProducto }) {
  const [desc, setDesc] = descripcion;

  return (
    <header className="header">
      <div className="header-content">
        <div className="header-left">
          <h1>Gestión de productos</h1>
          <p>Trabajo Práctico Nº4 - Programación Visual</p>
        </div>

        <div className="header-right">
          <input
            type="text"
            placeholder="Buscar producto..."
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={handleBuscarProducto}>Buscar</button>
          <button onClick={onAgregar}>Agregar</button>
          <button onClick={onListar}>Listar</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
