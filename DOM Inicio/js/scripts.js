console.log("1");
(function () {
  // Es muy recomendable para escuchar cuando el documento haya terminado de cargar
  "use strict";
  document.addEventListener("DOMContentLoaded", function () {
    console.log("2");

    /*
    // getElementById
    var logo = document.getElementById("logo");
    console.log(logo);

    var navegacion = document.getElementById("navegacion");
    console.log(navegacion);

    //navegacion.style.display = "none"; //para ocultar*/

    // getElementsByClassName
    /*
    var navegacion = document.getElementsByClassName("navegacion");
    console.log(navegacion); //nos lo devuelve en un arreglo
    console.log(navegacion[0]); //nos lo devuelve en un arreglo

    var contenido = document.getElementsByClassName("contenido");
    console.log(contenido); //nos lo devuelve en un arreglo
    console.log(contenido[0]); //nos lo devuelve en un arreglo

    //contenido[0].style.display = "none"; */

    //getElementsByTagName
    /*
    var enlaces = document.getElementsByTagName("a");
    console.log(enlaces);
    console.log(enlaces.length);

    for (var i = 0; i < enlaces.length; i++) {
      enlaces[i].setAttribute("target", "_blanck");
    }

    var enlacesSiderBar = document
      .getElementById("sidebar")
      .getElementsByTagName("a");
    console.log(enlacesSiderBar);

    for (var i = 0; i < enlacesSiderBar.length; i++) {
      enlacesSiderBar[i].setAttribute("href", "https://www.google.com.mx");
    }

*/
    /*
    //querySelector
    var logo = document.querySelector("#logo");
    console.log(logo);

    var encabezado = document.querySelector("aside h2");
    console.log(encabezado);

    var encabezado = document.querySelectorAll("h2");
    console.log(encabezado[0].innerText);

    var encabezado = document.querySelectorAll("h2, footer p");
    console.log(encabezado);

    var enlaces = document.querySelectorAll("a");
    console.log(enlaces);*/

    /*var enlace = document.querySelectorAll("a");
    console.log(enlace);

    for (var i = 0; i < enlace.length; i++) {
      console.log(enlace[i].innerText);
    }*/

    /*
    var enlaces = document.querySelectorAll("#menu ul li a")[0];
    console.log(enlaces.nodeType);
    console.log(enlaces.nodeName);
    console.log(enlaces.attributes);
    console.log(enlaces.firstChild);
    console.log(enlaces.firstChild.nodeValue);

    enlaces.firstChild.nodeValue = "Home"; //para cambiar
    enlaces.id = "mi_id";*/

    /*
    //Crear contenido

    var sidebar = document.querySelector("#sidebar");
    console.log(sidebar);

    var nuevoElemento = document.createElement("H1");
    var nuevoTexto = document.createTextNode("Hola mundo");
    nuevoElemento.appendChild(nuevoTexto);
    sidebar.appendChild(nuevoElemento);

    //Agregar entrada 6

    var enlacesSiderBar = document.querySelector("#sidebar ul");
    //creando el enlace
    var nuevoEnlace = document.createElement("A");
    nuevoEnlace.setAttribute("href", "#");
    var textoEnlace = document.createTextNode("Entrada 6");
    nuevoEnlace.appendChild(textoEnlace);
    //creando la lista
    var nuevaLista = document.createElement("LI");
    nuevaLista.appendChild(nuevoEnlace);
    //loa gregamos al menú
    enlacesSiderBar.appendChild(nuevaLista);*/

    /*
    //Clonar nodo

    var contenido = document.querySelectorAll("main");
    var nuevoContenido = contenido[0].cloneNode(true);

    var sidebar = document.querySelector("aside");
    sidebar.insertBefore(nuevoContenido, sidebar.childNodes[5]);*/

    /*
    //CONTROLANDO INSERCIONES CON INSERTBEFORE
    
    
    var sidebar = document.querySelector("aside");
    var masVisitados = document.createElement("H2");
    var textoVisitados = document.createTextNode("Post Más Visitados");

    masVisitados.appendChild(textoVisitados);
    sidebar.insertBefore(masVisitados, sidebar.childNodes[0]);

    var contenido = document.querySelectorAll("main h2");
    for (var i = 0; i < contenido.length; i++) {
      var nuevoElemento = document.createElement("LI");
      var nuevoTexto = document.createTextNode(
        contenido[i].firstChild.nodeValue
      );
      nuevoElemento.appendChild(nuevoTexto);
      sidebar.insertBefore(nuevoElemento, sidebar.childNodes[1]);
    }*/

    /*
    //ELIMINANDO NODOS
    var primerPost = document.querySelector("main article");
    console.log(primerPost);
    primerPost.parentNode.removeChild(primerPost); // se borra completamente del DOM

    var enlaces = document.querySelector("#navegacion nav ul li  a");
    //var enlaces = document.querySelector("#navegacion nav ul li  a")[10]; //remover la posición 10
    console.log(enlaces);
    enlaces.parentNode.removeChild(enlaces);
    */

    /*
    //REEMPLAZANDO ELEMENTOS

    /*var viejoNodo = document.querySelector("main h2");
    var nuevoNodo = document.querySelector("footer h2");

    viejoNodo.parentNode.replaceChild(nuevoNodo, viejoNodo);*/

    //reemplazar nodo con uno nuevo
    /*
    var nuevoTitulo = document.createElement("H2");
    var nuevoTexto = document.createTextNode("Hola mundo");
    nuevoTitulo.appendChild(nuevoTexto);

    var viejoNodo = document.querySelector("main h2");
    viejoNodo.parentNode.replaceChild(nuevoTitulo, viejoNodo);*/
  });
})();
console.log("3");
