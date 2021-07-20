//  Arreglos - Arrays

const numeros = [45, 8, 65, 25, 396, 17];

console.log(numeros);

// Se formatea en una tabla
console.table(numeros);

// Con constructor
const meses = new Array("Enero", "Febrero", "Marzo", "Abril");
console.table(meses);

// Acceder a los valores de un arreglo
console.log(meses[2]);

// Conocer la extensión de un arreglo
console.log(meses.length);

// Iterador

numeros.forEach(function (numeros) {
  console.log(numeros);
});

// Agregar elementos al final

numeros.push(90); //Forma viejita de agregar al final
numeros.unshift(01); //Forma viejita de agregar al inicio

meses.pop(); //Elimna el último elemento
meses.shift(); // Elimina el primer elemento
console.log(numeros);

meses.splice(2, 1); // Eliminar por posición --- (posición en el arreglo, cuantos queremos elminar desde la posición)
console.log(meses);

// Rest Operator o Spread Operator

const nuevoArreglo = [...meses, "Mayo"]; //Equivalente a un push
console.log(nuevoArreglo);
const nuevoArreglo1 = ["Mayo",  ...meses]; //Equivalente a un unshift
console.log(nuevoArreglo1);
