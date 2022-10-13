/* Realizar una función llamada Producto.
 * Esta función debe recibir el id, nombre, precio y stock del producto, y
retornar un objeto con esos campos. */

function producto(id, nombre, precio, stockProducto) {
  return {
    id: id,
    nombre: nombre,
    precio: precio,
    stockProducto: stockProducto,
  };
}

//Probamos en consola
console.log(producto(23, "Televisor", 45000, 15));
