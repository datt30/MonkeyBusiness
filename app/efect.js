'use strict';
var map;
var siteUrb; //site of urbanization
var markers = [];

//este script se encarga de ejecutar las animaciones de los elementos en el DOM
$(document).ready(function() {

  window.setTimeout( function(){
    $(".card_negocio_interno").each(function() {
        animation(this, 'slideInUp');
    });
  }, 1000); //se esperan 2 segundos para ejecutar la siguiente animacion

  window.setTimeout( function(){
    $(".card_comercio_externo").each(function() {
        animation(this, 'slideInUp');
    });
  }, 1500);

  window.setTimeout( function(){
    $(".card_contacto").each(function() {
        animation(this, 'slideInUp');
    });
  }, 2000);

});


//realiza todos los cambios y animaciones para voltear la tarjeta
function animationflip(element,location){
    var card = $(element).parent().parent(); //toma el padre del padre del contenido obteniendo la carta en si
    animation(card, 'flipInY');

    card.children().eq(0).addClass('disappear'); //le agregamos disappear al adverso de la carta
    card.children().eq(1).removeClass('disappear'); //le quitamos disappear al reverso de la carta
    //colocamos el mapa en el reverso de la carta
    var mapInCard = card.children().eq(1).children().eq(0).get(0);
    mapForCard(mapInCard,location);
}

//realiza todos los cambios y animaciones para voltear la tarjeta a su estado original
function animationflipOut(element){
    var card = $(element).parent().parent(); //toma el padre del padre del contenido obteniendo la carta en si
    animation(card, 'flipInY');

    card.children().eq(0).removeClass('disappear'); //le quitamos disappear al adverso de la carta
    card.children().eq(1).addClass('disappear'); //le agregamos disappear al reverso de la carta
}



function removeCards_exp_contactos(){
  $(".card_comercio_externo").each(function() {
      this.remove();
  });
  $(".card_negocio_interno").each(function() {
      this.remove();
  });
}

function removeCards_exp_comExt(){
  $(".card_negocio_interno").each(function() {
      this.remove();
  });
  $(".card_contacto").each(function() {
      this.remove();
  });
}

function removeCards_exp_negInt(){
  $(".card_comercio_externo").each(function() {
      this.remove();
  });
  $(".card_contacto").each(function() {
      this.remove();
  });
}

/////////////////////////////////////////////////MAPAS FUNCIONES E ITERACIONES /


function mapForCard(element,location) {
        console.log(element);
        console.log(location);

        map = new google.maps.Map(element, {
          zoom: 16,
          center: location,
        });

        var marker = new google.maps.Marker({
          position: location,
          map: map
        });
        markers.push(marker);
}
