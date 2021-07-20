//  Objetos

const producto = {
  nombreProducto: "Monitor 20in",
  precio: 300,
  disponible: true,
};


//  Forma anterior
const precioProducto = producto.precio;
const nombreProducto = producto.nombreProducto;

console.log(precioProducto);
console.log(nombreProducto);

//  Destructuring
// Crea una variable y le asigna el valor
const {precio} = producto;
const {nombreProducto} = producto;
const {precio, nombreProducto, disponible} = producto;

console.log(precio);
console.log(nombreProducto);