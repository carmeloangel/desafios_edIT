/* A todo lo hecho en el ejercicio 1, agregar una funcion "Carrito" que haga:

1. Incrementar la cantidad de un producto ya existente en el carrito.
2. Agregar un nuevo producto al carrito.
3. Quitar un producto ya existente.
4. Obtener un reporte con el precio total y el detalle. Cada fila de del detalle debe tener
el nombre del producto, el precio del producto, la cantidad pedida y el total por fila.
*/

//Función que crea un producto
function producto(id, nombre, precio, stockProducto) {
  return {
    id: id,
    nombre: nombre,
    precio: precio,
    stockProducto: stockProducto,
  };
}

//Crear un carrito
let carrito = () => {
  //Array que guarda los productos a comprar
  let elementos = [];

  //Agrega un producto nuevo al carrito
  function agregarProducto(producto, cantidad) {
    elementos.push({
      producto: producto,
      cantidad: cantidad,
    });
  }

  //Aumenta la cantidad de un producto que ya estan en el carrito
  function aumentarUnProducto(item, aumento) {
    let flag = 0;

    elementos.forEach((element) => {
      if (element.producto.nombre === item.nombre) {
        element.cantidad += aumento;
        flag = 1;
      }
    });

    if (flag === 0) {
      console.log(
        "No se encontro el producto en el carrito, al tratar de aumentar un producto."
      );
    }
  }

  //Elimina un producto especifico del carrito
  function eliminarProducto(item) {
    let flag = 0;

    for (let i = 0; i < elementos.length; i++) {
      const element = elementos[i];

      if (element.producto.nombre === item.nombre) {
        elementos.splice(i, 1);
        flag = 1;
      }
    }

    if (flag === 0) {
      console.log(
        "No se encontro el producto en el carrito, al tratar de eliminar."
      );
    }
  }

  //Resumen del pedido con el precio de cada item
  function resumenPedido() {
    let precioTotal = 0;
    const detalle = [];

    elementos.forEach((item) => {
      const precioTotalItem = item.producto.precio * item.cantidad;
      detalle.push({
        nombre: item.producto.nombre,
        precioUnitario: item.producto.precio,
        cantidad: item.cantidad,
        precioAcumulado: precioTotalItem,
      });
      precioTotal += precioTotalItem;
    });

    return {
      detalle: detalle,
      precioTotal: precioTotal,
    };
  }

  //Retorna el carrito con sus atributos y metodos
  return {
    agregarProducto: agregarProducto,
    aumentarUnProducto: aumentarUnProducto,
    eliminarProducto: eliminarProducto,
    resumenPedido: resumenPedido,
    elementos: elementos,
  };
};

//Creamos productos
const producto1 = producto(23, "Televisor", 45000, 15);
const producto2 = producto(29, "Lavarropas", 49000, 11);
const producto3 = producto(33, "Mixer", 15000, 35);

//Se crea un carrito de prueba
const carrito1 = carrito();

//Se agregan productos al carrito1
carrito1.agregarProducto(producto2, 4);
carrito1.agregarProducto(producto3, 1);
// console.log(carrito1);

//Se modifica la cantidad de un producto del carrito1
carrito1.aumentarUnProducto(producto3, 10);
// console.log(carrito1);

//Removemos el producto 2 del carrito1
carrito1.eliminarProducto(producto2);
// console.log(carrito1);

//Volvemos a agregar 2 productos al carrito1
carrito1.agregarProducto(producto2, 3);
carrito1.agregarProducto(producto1, 1);

//Vemos el carrito y resumen del pedido
console.log(carrito1);
console.log(carrito1.resumenPedido());
