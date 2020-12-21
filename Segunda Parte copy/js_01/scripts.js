$(document).ready(function () {});

$(function () {
  "use strict";
  console.log("listo!");

  /*
  $("div.logo img").on("click", function () {
    // forma en que vamos a esperar un evento (cuando)
    console.log("haz hecho clic en el logo");
  });*/

  /*
  $("div.logo img").on("click", function () {
    $(this).remove(); //es el elemento que causa el evento -> $("div.log img") es lo mismo
  });*/

  /*
  $("div.logo img").on("mouseenter", function () {
    // es como el como el hover en CSS
    console.log("Sobre logo ");
  });

  $("div.logo img").on("mouseleave", function () {
    console.log("Fuera del logo ");
  });*/

  /*
  $("#menu").on("click", function () {
    $(".navegacion").show(); //mostrar
  });*/

  /*
  $("div.logo img").addClass("activo");

  $(".navegacion").show();

  $(".navegacion nav ul li:first").addClass("activo");
  $("main article:first").addClass("activo");

  $(".navegacion ul li a").on("click", function (event) {
    $(".navegacion ul li a").removeClass("activo");
    event.preventDefault();
    $(this).addClass("activo");
  });*/

  /*
  // Forma más avanzada pero más comprimida
  $("main").on({
    click: function () {
      $(this).addClass("fondorojo activo");
    },
    mouseenter: function () {
      $(this).addClass("fondorojo");
    },
    mouseleave: function () {
      $(this).addClass("activo");
    }
  });
*/


  //$("main article:first").remove(); // lo borra totalmente del DOM
  //$("main article:first").hide(); // solo coloca un display: none

  /*
  var copia = $("main article:last").clone();
  $("main").append(copia); // lo agrega al final
  $("main").prepend(copia); // lo agrega al inicio*/

  /*
  var copia = $("main article:last").clone();
  $(copia).appendTo("main"); // lo agrega al inicio
  $(copia).prependTo("main"); // lo agrega al final*/
});
