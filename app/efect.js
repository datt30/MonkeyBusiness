'use strict';
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
function animationflip(element){
    var card = $(element).parent().parent(); //toma el padre del padre del contenido obteniendo la carta en si
    animation(card, 'flipInY');

    card.children().eq(0).addClass('disappear'); //le agregamos disappear al adverso de la carta
    card.children().eq(1).removeClass('disappear'); //le quitamos disappear al reverso de la carta
    //colocamos el mapa en el reverso de la carta
    //var mapInCard = card.children().eq(1).children().eq(0);
    //mapForCard(mapInCard,{lat:6.216280, lng: -75.605903});
}

//realiza todos los cambios y animaciones para voltear la tarjeta a su estado original
function animationflipOut(element){
    var card = $(element).parent().parent(); //toma el padre del padre del contenido obteniendo la carta en si
    animation(card, 'flipInY');

    console.log(card.children().length);
    card.children().eq(0).removeClass('disappear'); //le quitamos disappear al adverso de la carta
    card.children().eq(1).addClass('disappear'); //le agregamos disappear al reverso de la carta
}


//remueve todas las cartas
function removeCards(){
  $(".card_comercio_externo").each(function() {
      this.remove();
  });
  $(".card_negocio_interno").each(function() {
      this.remove();
  });
  $(".card_contacto").each(function() {
      this.remove();
  });
}


function removeCards_exp_contactos(){
 removeCards();
 //aqui llamar cargar solo contactos
}

function removeCards_exp_comExt(){
 removeCards();
 //aqui llamar cargar solo contactos
}

function removeCards_exp_negInt(){
 removeCards();
 //aqui llamar cargar solo contactos
}
