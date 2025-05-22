import React from 'react';

function SearchBar(props) {
  const [descripcion, setDescripcion] = props.descripcion;
  const [modo, setModo] = props.modo;

  const styles = {
    navBar: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#282c34',
      color: 'white',
      padding: '5px',
    },
  };

  return (
    <div style={styles.navBar}>
      <div style={{ display: 'flex'}}>
        <button style={{margin:"5px"}} onClick={() => setModo('lista')}>Listado de Productos</button>
        <button style={{margin:"5px"}} onClick={() => setModo('nuevo')}>Agregar Productos</button>
      </div>
      <div>
        <input style={{margin:"5px", height:"30px", border:"1px solid #282c34"}}
          type='text'
          placeholder='Buscar producto...'
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <button style={{margin:"5px"}} onClick={props.handleBuscarProducto}>Buscar</button>
      </div>
    </div>
  );
}

export default SearchBar;
