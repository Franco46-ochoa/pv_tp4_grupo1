import React, { useState } from "react";
import ProductForm from "./Components/ProductForm";


function App() {
 const [Productos, setProductos] = useState([]);
 return (
  <>
  <div>
    <ProductForm Productos={[Productos, setProductos]}></ProductForm>
  </div>
  </>
 )
}


export default App
