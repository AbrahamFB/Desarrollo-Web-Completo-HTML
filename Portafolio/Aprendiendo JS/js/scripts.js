/*var nombre = prompt("Cuál es tu nombre?");

      document.getElementById("mensaje").innerHTML = `Bienvenido ${nombre}`;*/

//console.log("Hola!");
//
//console.table([1, 2, 3, 4, 5]);
//
//console.error("Existe un error!!");
//
////console.clear(); /*Limpiar la consola*/
//
//console.warn("Cuidado");
//
// En JavaScript existen 3 formas de crear variables

/** VAR */
// var nombre, edad;

// nombreCliente = "Abraham"; //Notación camello
// ApellidoCliente = "Flores"; // Pascal Case
// edad_cliente = 21; //underscore

// console.log(nombreCliente);
// console.log(ApellidoCliente);
// console.log(edad_cliente);

//Comentar todo Ctrl + k + c

/* LET* */
//No puedes crear dos let con el mismo nombre
// let nombre;
// nombre = "Liz";

// console.log(nombre);

/** CONST */
// Es una variable constante no puede inicialisar vacia y no cambia

// const cliente = "Abraham";

// console.log(cliente);

// //Uso, recomendado para las etiquetas de HTML
// const divMensaje = document.getElementById("mensaje");

// let nombre;
// nombre = "Abraham";

// console.log(nombre);

// let aprendiendo = "Aprendiendo",
//   tecnologia = "JavaScript";

// console.log(`${aprendiendo} ${tecnologia}`);
// console.log(aprendiendo + " " + tecnologia); //Concatenar

// 163 Números

//const numero1 = 30,
//  numero2 = "20",
//  numero3 = 20.2,
//  numero4 = -3,
//  numero5 = 20;
//
//console.log(numero1);
//console.log(numero2);
//console.log(numero3);
//console.log(numero4);
//
//let resultado;

//SUMA
//resultado = numero1 + numero5;
//console.log(resultado);

//RESTA
//resultado = numero1 - numero5;
//console.log(resultado);

//MULTIPLICACIÓN
//resultado = numero1 * numero5;
//console.log(resultado);

//DIVISIÓN
//resultado = numero1 / numero5;
//console.log(resultado);

// clase MATH

//resultado = Math.round(2.5); //redondeo hacia

//resultado = Math.floor(2.5); //redondeo hacia abajo

//resultado = Math.ceil(2.01); //redondeo hacia arriba

// RAIZ CUADRADA
//resultado = Math.sqrt(144);

//VALOR ABSOLUTO
//resultado = Math.abs(numero4);

//POTENCIA
//resultado = Math.pow(8, 3);

//Mínimo
//resultado = Math.min(10, 2, 4, 60, 5);

//Máximo
//resultado = Math.maxs(10, 2, 4, 60, 5);

//164 Convirtiendo String a Número
//let numero1 = 50,
//  numero2 = "10",
//  numero3 = "tres",
//  numero4 = "20.10",
//  resultado;
//
//resultado = numero1 + Number(numero2);
//resultado = console.log(resultado);
//
//
//resultado = numero1 + parseInt(numero4);
//resultado = console.log(resultado);
//
//resultado = numero1 + parseFloat(numero4);
//resultado = console.log(resultado);
//
//let dato;
//
//dato = Number("20"); //20
//dato = Number("-20.20"); //-20.20
//dato = Number(true); //1
//dato = Number(false); //0
//dato = Number(null); // 0
//dato = Number("Hola mundo"); //NaN
//console.log(dato);

// To Fixed

//let num1 = "546416816881.2168468";
//let num2 = 4681768176878.76816875;
//
//console.log(Number(num1).toFixed(4));
//console.log(num2.toFixed(4));

// 165 Convirtiendo de Número a String

//let dato= 58732658794365634785;
//
//dato = String(dato);
//
//console.log(dato);
//console.log(dato.length);

// 166 JavaScript y sus tipos de datos

//const nombre = 'Abraham';

//console.log(typeof nombre); //String

//const edad = 21;
//console.log(typeof edad); //Number

//boolean
//let aprendiendoJS = true;
//console.log(typeof aprendiendoJS); //Number

//let valor;

//console.log(typeof valor); //undefined
//valor = "Hola";
//console.log(typeof valor); //String
//valor = true;
//console.log(typeof valor); //Boolean
//valor = 20;
//console.log(typeof valor); //Number
//valor = "20";
//console.log(typeof valor); //String

//Null
//let hijos = null;
//console.log(typeof hijos); //Object

// undefined

//let nombr;
//console.log(typeof nombr); //undefined

//Arreglo
//let lenguajes = ["HTML", "JS", "PHP"];
//console.log(typeof lenguajes); //Object

//Objeto
//let persona = {
//      nombre : "Abraham",
//      ciudad: "Puebla"
//};
//console.log(typeof persona); //Object

// Fecha

//let fecha = new Date();
//console.log(typeof fecha);//Object

// 167 Arrays o Arreglos

//const numeros = [10, 20, 30, 40, 50];
//console.log(numeros);
//
//const meses = new Array("enero", "febrero", "marzo");
//console.log(meses[2]);
//
//const arreglo = ["Hola", 10, true, "si", null, undefined];
//console.log(arreglo.length);
//console.log(Array.isArray(arreglo)); //Para comprobar si es un arreglo
//
////Agregar al final del Arreglo
//meses.push("abril");
//meses.push("mayo");
//console.log(meses);
//
////Agregar al inicio del Arreglo
//meses.unshift("Mes 0");
//console.log(meses);
//
////Eliminar del final
//meses.pop();
//console.log(meses);
//
////Eliminar del inicio
//meses.shift();
//console.log(meses);
//
////Elminar de un rango del arreglo
//meses.splice(0,2);
//console.log(meses);
//
////Voltear el arreglo
//meses.reverse();
//console.log(meses);
//
//let frutas = ["Platano", "Manzana", "Fresa", "Naranja"];
//
//frutas.sort(); //Ordenar alfabéticamente
//console.log(frutas);

//168 Creando objetos

//Object Literal
//const persona = {
//  nombre: "Abraham",
//  edad: 21,
//  musica: ["Pop", "Rock clásico"],
//  hogar:{
//      ciudad: "Puebla",
//      pais: "México"
//  }
//}

//POO

/**  Object Literal **/
const producto = {
  nombre: "Tablet",
  precio: 1000,
};

/*
/* Object Constructor ---

function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
/// Prototypes Nos va a permitir crear funciones que solo se utilizan en un objeto en especifico
Cliente.prototype.formatearCliente = function () {
  return `Nombre: ${this.nombre} \n Apellido: ${this.apellido}`;
};
function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

/// Prototypes Nos va a permitir crear funciones que solo se utilizan en un objeto en especifico
Producto.prototype.formatearProducto = function () {
  return `EL Producto ${this.nombre} tiene un precio de $ ${this.precio}`;
};

const producto2 = new Producto("Monitor", 1900);
const producto3 = new Producto("Teléfono", 1200);
const cliente = new Cliente("Abraham", "Flores");

console.log(producto2);
console.log(cliente.formatearCliente());
console.log(producto2.formatearProducto());
console.log(producto3.formatearProducto());

*/

//Clases
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

const producto2 = new Producto("Monitor", 1900);
const producto3 = new Producto("Teléfono", 1200);

console.log(producto2);

//console.log(persona);
//console.log(persona.edad); //Acceder a sus prioridades
//console.log(persona.musica[1]); //Acceder a sus prioridades
//console.log(persona.hogar.pais); //Acceder a sus prioridades
////OOOOOOO
//console.log(persona["hogar"]["pais"]); //Acceder a sus prioridades

//169 Template Strings
//
//const nombre = "Abraham",
//  trabajo = "Desarrollador Web";
//
//  console.log("Nombre: " + nombre + ", Trabajo: " + trabajo);
//
//  console.log(`Nombre: ${nombre}, Trabajo: ${trabajo}`);
//
//  const contenedorApp = document.querySelector("#mensaje");
//
//  let html = "<ul>" +
//                  "<li> Nombre: " + nombre + "</li>" +
//                  "<li> Trabajo: " + trabajo + "</li>" +
//            "</ul>";
//contenedorApp.innerHTML = html;
//
//let html2 = `<ul>
//                  <p>Template String</p>
//                  <li> Nombre:  ${nombre} </li>
//                  <li> Trabajo: ${trabajo}</li>
//            </ul>`;
//
//
//contenedorApp.innerHTML = html2;

// 170 FUNCIONES

////Function declaration
//function saludar() {
//  console.log("Hola");
//}
//
//saludar();
//
//// Diferencia, la declarada puede llamarse antes de declararla
//
//// Funcion expression
//const suma = function () {
//  console.log(1 + 3);
//};
//
//suma();
//
//saludar1("Abraham", "Desarrollor Web");
//saludar1("Gabriela", "Licenciada en Criminología");
//saludar1("Roberto", "Ingeniero Industrial");
//saludar1("Juan");
//saludar1();
//function saludar1(nombre = "Visitante", trabajo = "No sabemos") {
//  console.log(`Hola ${nombre} \nTu trabajo es: ${trabajo}`);
//}
//
//const suma1 = function (a, b) {
//  console.log(a + b);
//};
//suma1(10, 30);
//suma1(1, 20);
//suma1(12, 2130);
//
//// IIFE  ----- Se invocan ellas mismas
//
//(function () {
//  console.log("Aquí estoy");
//})();
//
//(function (tecnologia) {
//  console.log(`Aquí estoy aprendiendo ${tecnologia}`);
//})("JavaScript");

// 171 Métodos o funciones dentro de los objetos

//// Métodos
//const musica = {
//  reproducir: function (cancion) {
//    console.log(`Reproduciendo la canción: ${cancion}`);
//  },
//  pausar: function(){
//        console.log("Pausado");
//  }
//};
//
//musica.reproducir("Llegaste Tú");
//musica.reproducir("Error");
//musica.reproducir("Rain November");
//musica.pausar();
//
////Los métodos también pueden ir por fuera
//musica.borrar = function(id){
//      console.log(`Borrando la canción con el ID: ${id}`);
//}
//
//musica.borrar(121);

//// 172 Funciones que retornan valores y Arrow Functions
//
//const suma1 = (
//  a = 0,
//  b = 0 // function (a = 0, b = 0)
//) => a + b;
//
//const multiplicar = (a) =>
//  // function (a)
//  a * 10;
//
//let total;
//let resultadoSuma = suma1(10, 20);
//total = multiplicar(resultadoSuma);
//
//console.log(total);
//
////Arrow Functions
//
//let viajando = (destino) => `Viajando a la Ciudad de ${destino}`;
//
//let viaje;
//viaje = viajando("Francia");
//
//console.log(viaje);

// 173 Object Constructor y la palabra this

//// Obecjt Literal
//
//const persona = {
//  nombre: "Abraham",
//  edad: 67,
//  anioNacimiento: function () {
//    return new Date().getFullYear() - this.edad;
//  },
//};
//
//console.log(persona.anioNacimiento());
//
//function Tarea(nombre, urgencia) {
//  this.nombre = nombre;
//  this.urgencia = urgencia;
//}
//
////Nueva forma
//
////class Tarea {
////  constructor(nombre, urgencia) {
////    this.nombre = nombre;
////    this.urgencia = urgencia;
////  }
////}
//
////Crear nuevas tareas
//
//const tarea1 = new Tarea("Aprender JavaScript", "Urgente");
//const tarea2 = new Tarea("Arreglar mi cuarto", "Medio");
//const tarea3 = new Tarea("Comenzar mis cursos", "Alto");
//
//console.log(tarea1);
//console.log(tarea2);
//console.log(tarea3);

////174 Fechas
//
//const diaHoy = new Date();
//
//let valor = diaHoy;
//
////Retorna el número del mes 0 = Enero
//valor = diaHoy.getMonth();
//console.log(valor);
//
////Retorna el número del dia 0 = Domingo
//valor = diaHoy.getDay();
//console.log(valor);
//
////Retorna el número del dia del mes
//valor = diaHoy.getDate();
//console.log(valor);
//
//
////Retorna minutos de la hora
//valor = diaHoy.getMinutes();
//console.log(valor);
//
////Retorna la hora
//valor = diaHoy.getHours();
//console.log(valor);
//
////Retorna un timestap
//valor = diaHoy.getTime();
//console.log(valor);
//
////establecer el año
//valor = diaHoy.setFullYear(1999);
//
////Retorna el número del año actual
//valor = diaHoy.getFullYear();
//console.log(valor);
//
//// new Date es igual a MES, DÍA y AÑO
//
//const unDia = new Date("03-16-1999");
//
//let valor1;
//
//valor1 = unDia.getDay();
//
//console.log(valor1);

//// 175 CONDICIONALES - IF, IFELSE, ELSE
//
//// === es operador estricto
//const puntaje = 1000;
//
//if (puntaje === 1000) {
//  console.log("Si es igual");
//} else {
//  console.log("No es igual");
//}
//
//if (puntaje !== 1000) {
//  console.log("Si es igual");
//} else {
//  console.log("No es igual");
//}
//
//const logueado = true;
//
//if (logueado) {
//  console.log("Si estas logueado");
//} else {
//  console.log("Inicia sesión");
//}
//
//const edad = 18;
//
//if (edad >= 18) {
//  console.log("Eres mayor de edad");
//} else {
//  console.log("Eres menor de edad");
//}
//
//let dinero = 500;
//let totalcarrito = 600;
//
//if (dinero > totalcarrito) {
//  console.log("Pago realizado");
//} else {
//  console.log("Fondos insuficientes");
//}
//
//let tarjeta = true;
//
//if (dinero > totalcarrito) {
//  console.log("Pago realizado");
//} else if (tarjeta) {
//  console.log("Pagaste con tarjeta");
//} else {
//  console.log("Fondos insuficientes");
//}
//
//// 176 OPERADOR && Y || Y EL TERNARIO
//
//// OR || SE DEBE CUMPLIR AL MENOS UNA
//if (dinero > totalcarrito || tarjeta) {
//  console.log("Pago realizado con tarjeta");
//} else {
//  console.log("Fondos insuficientes");
//}
//
//// AND && SE DEBEN CUMPLIR TODAS
//if (dinero > totalcarrito && tarjeta) {
//  console.log("Pago realizado con tarjeta");
//} else {
//  console.log("Fondos insuficientes");
//}
//
//let hora = 8;
//if (hora > 0 && hora <= 12) {
//  console.log("Buenos días");
//} else if (hora > 12 && hora <= 18) {
//  console.log("Buenas tardes");
//} else if (hora > 18 && hora <= 24) {
//  console.log("Buenas noches");
//} else {
//  console.log("Horario no disponible");
//}
//
//// Ternario
//
//let logueado1 = true;
//
//console.log(logueado1 ? "Si se logueó" : "No se logueó");

//// 177 CONDICIONALES - SWITCH
//
//// Switch statement
//
//const metodoPago = "efectivo";
//
//switch (metodoPago) {
//  case "efectivo":
//    console.log(`Pagaste con ${metodoPago}`);
//    break;
//  case "cheque":
//    console.log(`Pagaste con ${metodoPago} revisaremos que tengas fondos`);
//    break;
//  case "tarjeta":
//    console.log(`Pagaste con ${metodoPago} espere un momento..`);
//    break;
//  default:
//    console.log("Aún no has pagado o método no válido");
//    break;
//}

//// 178 LOOPS - FOR, WHILE Y DO WHILE
//
//// Foor loop -> evalua antes de ejecutar
//for (let i = 0; i < 10; i++) {
//  console.log(`Número ${i}`);
//}
//
//const carrito = ["producto 1", "producto 2", "producto 3"];
//
//for (let j = 0; j < carrito.length; j++) {
//  console.log(`Producto en el carrito ${carrito[j]}`);
//}
//
//// While loop -> evalua antes de ejecutar
//let i = 0;
//while (i < 10) {
//  console.log(`Número ${i}`);
//  i++;
//}
//
//let j = 0;
//while (j < carrito.length) {
//  console.log(`Producto en el carrito ${carrito[j]}`);
//  j++;
//}
//
//// Do while -> se ejecuta al menos una vez
//
//let q = 11;
//do {
//  console.log(`Número ${q}`);
//  q++;
//} while (i < 10);
//

//// 179 OTROS ITERADORES EN JAVASCRIPT
//
//// Un arreglo
//const pendientes = ["Tarea", "Comer", "Proyecto", "Estudiar JavaScript"];
//
//// Un arreglo con objetos
//
//const carrito = [
//  { id: 1, producto: "Libro" },
//  { id: 2, producto: "Camisa" },
//  { id: 3, producto: "Disco" },
//];
//
//// Un objeto
//
//let automovil = {
//  modelo: "Camaro",
//  motor: 6.0,
//  anio: 1967,
//  marca: "Chevrolet",
//};
//
//for (let i = 0; i < pendientes.length; i++) {
//  console.log(pendientes[i]);
//}
//
//for (pendiente of pendientes) {
//  console.log(pendiente);
//}
//
//for (producto of carrito) {
//  console.log(producto.producto);
//}
//
//for (info of Object.values(automovil)) {
//  console.log(info);
//}
//
//pendientes.forEach(function (tarea) {
//  console.log(tarea);
//});
//
//pendientes.forEach((tarea) => {
//  console.log(tarea);
//});
//
//pendientes.map((tarea) => {
//  // crea una copia de un arreglo o de lo que esta iterando
//  console.log(tarea);
//});
//
//let nuevoArreglo = pendientes.forEach((tarea) => {});
//let nuevoArreglo2 = pendientes.map((tarea) => tarea);
//
//console.log(nuevoArreglo);
//console.log(nuevoArreglo2);
//
//Object.values(automovil).forEach((info) => {
//  console.log(info);
//});
//
//Object.keys(automovil).forEach((info) => {
//  console.log(info);
//});

//// 180 Scope
//// Scope es la visibilidad de una variable
//let musica = "Pop";
//
//if (musica) {
//  let musica = "Rock";
//  console.log(`Dentro del if ${musica}`);
//}
//
//console.log(`Fuera del if ${musica}`);

//// 181 OBJECT DESTRUCTURING -> extraer datos de un objeto
//
//const cliente = {
//  nombre: "Celeste",
//  tipo: "Premium",
//  datos: {
//    ubicacion: { ciudad: "Puebla", pais: "México" },
//    cuenta: {
//      desde: "10-12-2017",
//      saldo: 3000,
//    },
//  },
//  gustos: {
//    musica: ["Rock", "Pop"],
//  },
//};
//console.log(cliente);
//
//// Forma antigua
//const nombreCliente = cliente.nombre,
//  tipoCliente = cliente.tipo,
//  ubicacionCLiente = cliente.datos.ubicacion.ciudad;
//
//console.log(nombreCliente);
//console.log(tipoCliente);
//console.log(ubicacionCLiente);
//
//// Forma nueva
//let { nombre, tipo } = cliente;
//let {
//  datos: {
//    ubicacion: { ciudad },
//  },
//} = cliente;
//console.log(nombre);
//console.log(ciudad);
//
//let {
//  datos: {
//    cuenta: { saldo },
//  },
//} = cliente;
//
//console.log(saldo);
//
//let { gustos: musica } = cliente;
//console.log(musica);

//// 182 OBJECT LITERAL ENHACEMENT -> ponerlo dentro de un solo objeto
//
//const banda = "Pop",
//  genero = "Inglés",
//  canciones = ["Dance Monkey", "Perfect", "Sorry"];
//
//// forma anterior de hacerlo
//
//const pop = {
//  banda: banda,
//  genero: genero,
//  canciones: canciones,
//};
//
//console.log(pop);
//
//// forma nueva de hacerlo
//const pop2 = {
//  banda,
//  genero,
//  canciones,
//};
//
//console.log(pop2);

//// 188 FILTER .FIND Y .REDUCE EN JAVASCRIPT
//
//const personas = [
//  { nombre: "Abraham", edad: 21 },
//  { nombre: "Juan", edad: 29 },
//  { nombre: "Gerardo", edad: 21 },
//  { nombre: "Lizbeth", edad: 22 },
//  { nombre: "Celeste", edad: 20, aprendiendo: "Diagramas de Flujo" },
//];
//
//console.table(personas);
//
//// Obtener a las personas mayores de 25 años
//
//const mayores = personas.filter((persona) => persona.edad > 25);
//
//console.log(mayores);
//
//// Extraer información de Celeste
//
//const celeste = personas.find((persona) => persona.nombre === "Celeste");
//
//console.log(celeste);
//
//let { aprendiendo } = celeste;
//console.log(aprendiendo);
//
//// Reduce -> nos va a traer un acumulado de los registros
//
//let total = personas.reduce((edadTotal, persona) => {
//  return edadTotal + persona.edad;
//}, 0); //Valor inicial
//
//console.log(total);
//console.log(total / personas.length); //Promedio de edad

// 184 Fetch API y mostrar resultados de otro sitio web con JavaScript -> Viene a remplazar a AJAX

descargarUsuarios(30);

function descargarUsuarios(cantidad) {
  const api = `https://api.randomuser.me/?nat=US&results=${cantidad}`;

  // llamado a Fech
  fetch(api)
    .then((respuesta) => respuesta.json())
    .then((datos) => imprimirHTML(datos.results));
}

function imprimirHTML(datos) {
  datos.forEach((usuario) => {
    const li = document.createElement("li");
    const {
      name: { first },
      name: { last },
      picture: { medium },
      nat,
    } = usuario;
    li.innerHTML = `
      Nombre: ${first} ${last}
      País: ${nat}
      Imagen: <img src="${medium}">
`;

    document.querySelector("#app").appendChild(li);
  });
}
