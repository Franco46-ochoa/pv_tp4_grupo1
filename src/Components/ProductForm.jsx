import { useState, useCallback, useMemo } from "react";
import ProductInputs from "../subcomponents/ProductInputs";

function ProductForm(props) {
    const [Productos, setProductos] = props.Productos;
    const [Descripcion, setDescripcion] = useState('');
    const [precioUnitario, setprecioUnitario] = useState(0);
    const [stock, setstock] = useState(0);

    const precioConDescuento = useMemo(() => {
        return precioUnitario - (precioUnitario * 0.25);
    }, [precioUnitario]);

    const handleSubmit = useCallback((e) => {
         e.preventDefault(); // ← evita que la página se recargue
         const nuevoId = Date.now();
         const descuentoCalculado = precioUnitario * 0.25;
         const existe = Productos.some(p => p.Descripcion.toLowerCase() === Descripcion.toLowerCase()); 
         if (existe) {
            alert("Este artículo ya fue ingresado.");
            return;
         }
         const nuevoProducto = {
             Id: nuevoId,
             Descripcion,
             Precio: precioUnitario,
             Descuento: descuentoCalculado,
             PrecioConDescuento: precioUnitario - descuentoCalculado,
             Stock: stock,        
         };
         setProductos([...Productos, nuevoProducto]);
         console.table([...Productos, nuevoProducto]);
         // Reset
         setDescripcion("");
         setprecioUnitario(0);
         setstock(0);
     }, [Descripcion, precioUnitario, stock, Productos]);

    return (
        <ProductInputs Descripcion={Descripcion} setDescripcion={setDescripcion}  precioUnitario={precioUnitario} setprecioUnitario={setprecioUnitario} stock={stock} setstock={setstock} handleSubmit={handleSubmit} />
    );
}

export default ProductForm;
