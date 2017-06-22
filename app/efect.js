'use strict';

/**
 * Created by David on 26/09/2016.
 */

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


//realiza todos los cambios y animaciones para voltear las tarjetas
function animationflip(element){
    animation(element, 'flipInY');
}
