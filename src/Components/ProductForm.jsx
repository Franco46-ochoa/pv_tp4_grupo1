import React from "react";
import { useState, useCallback, useMemo, useEffect } from "react";
import ProductInputs from "../subcomponents/ProductInputs";

function ProductForm(props) {
  const [Productos, setProductos] = props.Productos;
  const [productoEditando, setProductoEditando] = props.nuevoProducto;

  const [Descripcion, setDescripcion] = useState("");
  const [precioUnitario, setprecioUnitario] = useState(0);
  const [stock, setstock] = useState(0);

  useEffect(() => {
    if (productoEditando) {
      setDescripcion(productoEditando.Descripcion);
      setprecioUnitario(productoEditando.Precio);
      setstock(productoEditando.Stock);
    }
  }, [productoEditando]);
  const precioConDescuento = useMemo(() => {
    return precioUnitario - precioUnitario * 0.25;
  }, [precioUnitario]);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const descuentoCalculado = precioUnitario * 0.25;

      const nuevoProducto = {
        Id: productoEditando ? productoEditando.Id : Date.now(),
        Descripcion,
        Precio: precioUnitario,
        Descuento: descuentoCalculado,
        PrecioConDescuento: precioUnitario - descuentoCalculado,
        Stock: stock,
      };

      if (productoEditando) {
        // Editar producto
        const nuevaLista = Productos.map((p) =>
          p.Id === productoEditando.Id ? nuevoProducto : p
        );
        setProductos(nuevaLista);
        setProductoEditando(null);
      } else {
        // Validar que no exista antes de agregar
        const existe = Productos.some(
          (p) => p.Descripcion.toLowerCase() === Descripcion.toLowerCase()
        );
        if (existe) {
          alert("Este artículo ya fue ingresado.");
          return;
        }
        setProductos([...Productos, nuevoProducto]);
      }

      console.table([...Productos]); // Mostrar por consola

      // Reset form
      setDescripcion("");
      setprecioUnitario(0);
      setstock(0);
    },
    [Descripcion, precioUnitario, stock, Productos, productoEditando]
  );

  return (
    <ProductInputs
        Descripcion={Descripcion}
        setDescripcion={setDescripcion}
        precioUnitario={precioUnitario}
        setprecioUnitario={setprecioUnitario}
        stock={stock}
        setstock={setstock}
        handleSubmit={handleSubmit}
        botonTexto={productoEditando ? "Guardar cambios" : "Ingresar"}
    />


  );
}

export default ProductForm;
