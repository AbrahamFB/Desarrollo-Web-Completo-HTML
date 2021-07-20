//  Objetos

const nombreProducto = "Monitor 20in";
const precio = 300;
const disponible = true;

const producto = {
  nombreProducto: "Monitor 20in",
  precio: 300,
  disponible: true,
};

console.log(producto);

//  La sintaxis de punto
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

console.log(producto["nombreProducto"]);
console.log("----------------------------------------------------");

//  Agregar nuevas propiedades
console.log("Agregar nuevas propiedades");
producto.imagen = "imagen.jpg";
console.log(producto);

//  Eliminar propiedades
console.log("Eliminar propiedades");
delete producto.disponible;
console.log(producto);
