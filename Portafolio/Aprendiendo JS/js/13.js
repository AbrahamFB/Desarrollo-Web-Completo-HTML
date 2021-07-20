const producto = {
  nombreProducto: "Monitor 20in",
  precio: 300,
  disponible: true,
};

const medidas = {
  peso: "1kg",
  medida: "20cm",
};

//Spread Operator, agregar sin modificar
const nuevoProducto = {
  ...producto,
  ...medidas,
};

console.log(producto);
console.log(nuevoProducto);
