// String o cadenas de texto
const producto = 'Tablet 10.1"';
const producto2 = String('Tablet 7.0"');
const producto3 = new String("Tablet 12.0");

const tweet = "Hoy es 12 de julio de 2021";

// typeof para saber el tipo de dato
console.log(producto);
console.log(producto2);
console.log(producto3);

// lenght es para la extensión de caracteres

console.log(tweet.length);


//  IndexOf para encontrar un elemento en el String

console.log(tweet.indexOf("julio"));
console.log(producto2.indexOf("Monitor"));  // Cuando es negativo signitica que no esta en la cadena de texto


// Incluye retorna True o False
console.log(tweet.includes("julio"));
console.log(producto2.includes("Monitor"));  

