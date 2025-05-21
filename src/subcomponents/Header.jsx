import React from "react";

function Header() {
  return (
    <header
      style={{
        backgroundColor: '#282c34',
        /* padding: '0.5rem', */
        color: 'white',
        width: '100vw',
        
        height: '6rem',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1 style={{ margin: "0", fontSize: "2.5rem" }}>Gestión de productos</h1>
        <p style={{ marginTop: "10px", fontSize: "1.2rem" }}>
          Trabajo Práctico Nº4 - Programación Visual
        </p>
      </div>
    </header>
  );
}

export default Header;

