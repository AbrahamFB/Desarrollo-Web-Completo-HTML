$(document).ready(function () {});

$(function () {
  "use strict";
  console.log("listo!");

  /* Recorriendo arreglos*/

  var proximosViajes = ["Puebla", "México", "Querétaro"];
  //console.log(proximosViajes);

  $.each(proximosViajes, function (i, v) {
    console.log(i);
    if (i == 0) {
      $("aside").append("<h2>Próximos Viajes</h2>");
    }
    $("aside").append("<li>" + v + "</li>");
  });

  var viajesPorFechas = {
    primero: "Puebla",
    segundo: "México",
    tercero: "Querétaro",
  };

  $.each(viajesPorFechas, function (i, v) {
    $("aside").append("<li>" + i + " - " + v + "</li>");
  });

  /* A J A X */

  /*$("aside").load("promociones.html");*/

  /* DESDE UN TXT */
  /* 
  $("div.logo img").on("click", cargarAjax);

  function cargarAjax() {
    $.ajax("promociones.txt", {
      success: agregarContenido,
      type: "GET",
      datatype: "text"
    });
  }

  function agregarContenido(data, status, jqxhr) {
    $("aside").text(data);
    console.log(status);
  }
*/

  $(".navegacion").show();
  /*
  $("main article:first h2").text();
  $("main article:first h2").text("Hola");
  $("main article:first h2").html("<h1>Puebla 2021</h1>");
  $(".navegacion ul li:first a").text();*/

  /*/* SELECCIONANDO Y CAMBIANDO ATRIBUTOS CON JQUERY 

  $(".navegacion ul li:first a").attr("href");

  $(".navegacion ul li:first a").attr("href", "https://abraham-fb.web.app/");
  $(".navegacion ul li:first a").attr("target", "_blank");

  $("article:first img").attr("src");
  //$("article:first img").attr("src", "img/imagen_2.jpg");

  $("article:first img").on("click", function () {
    $(this).attr("src", "img/imagen_2.jpg");
  });*/

  /* // CAMBIANDO EL CSS DE UN ELEMENTO CON JQUERY

  $(".logo img").css({ width: "400px" });
  $("main article h2").css({ color: "#db008d" });
  $("aside").css({
    "background-color": "#e1e1e1",
    "text-transform": "uppercase",
    padding: "20px",
  });

  $(".navegacion ul li a").on("mouseenter", cambiarColor);

  function cambiarColor() {
    $(".navegacion").css("background-color", "red");
    // Si no se agregan llaves, es suficiente con una coma ","
  }


  */

  /*//Eventos en JQuery

  $(".logo img").on("click", function () {
    $(this).animate({ width: "200px" }, 1000); // 1000 es un segundo
  });

  $("main article img").on("mouseenter", aumentarImagen);
  $("main article img").on("mouseleave", disminuirImagen);

  function aumentarImagen() {
    $(this).animate({ width: "100%" });
  }

  function disminuirImagen() {
    $(this).animate({ width: "350px" });
  }*/

  //SlideUp y SlideDown
  /*
  $(".logo img").click(function () {
    $("main article:first").slideUp(1000);
  });

  $("aside").click(function () {
    $("main article:first").slideDown(1000);
  });
*/

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
