"use strict"; // Correr JS en modo estricto
//  Objetos

const producto = {
  nombreProducto: "Monitor 20in",
  precio: 300,
  disponible: true,
};

//Evita que se agregue nuevas propiedades, cambiar un nuevo valor y tampoco eliminarlas
Object.freeze(producto);
producto.producto = "imagen.jpg";
delete producto.precio;
console.log(producto);


// Este evita que se agreguen nuevas propiedades y eliminarlas
Object.seal(producto);
producto.producto = "SAMSUNG";
delete producto.precio;
console.log(producto);

//Para saber si esta congelado o no
console.log(Object.isFrozen(producto));
