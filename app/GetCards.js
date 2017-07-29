window.onload = initialize;

//variable de urbanizacion
var refUrbanizacion;
//variable de negocios internos en refUrbanizacion
var refUrbanizacion_negocio_interno;
var refUrbanizacion_comercio_externo;
var refUrbanizacion_contactos;


function initialize(){
//se toman las ramas de la unidad y sus negocios internos
refUrbanizacion = firebase.database().ref().child("unidad x");
refUrbanizacion_negocio_interno= refUrbanizacion.child("negocio_interno");
refUrbanizacion_comercio_externo= refUrbanizacion.child("comercio_externo");
refUrbanizacion_contactos= refUrbanizacion.child("contactos");

get_negocios_internos_fromFirebase();
get_comercios_externos_fromFirebase();
get_contactos_fromFirebase();
}



function get_negocios_internos_fromFirebase(){
  refUrbanizacion_negocio_interno.on("value", function(snap){
    var datos = snap.val();
    for(var key in datos){
      var card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = '<div class="card_negocio_interno">\
                              <div class=""><!--adverso de la carta-->\
                                <img src="'+datos[key].img+'" alt="" class="img_card">\
                                <div class="info-card">\
                                  <h3>'+datos[key].nombre+'</h3>\
                                  <h4>'+datos[key].telefono+'</h4>\
                                </div>\
                                <button class="btn-show glyphicon glyphicon-plus color-orange" onclick="animationflip(this,'+datos[key].latlon+')"></button>\
                              </div>\
                              <div class="disappear"><!--reverso de la carta por defecto invisible-->\
                                <div class="map-card"></div>\
                                <div class="info-card">\
                                  <h4>'+datos[key].pagina+'</h4>\
                                  <h4>'+datos[key].descripcion+'</h4>\
                                </div>\
                                <button class="btn-show glyphicon glyphicon-minus color-orange" onclick="animationflipOut(this)"></button>\
                              </div>\
                        </div>';

      document.getElementById('container_cards').appendChild(card);
    }

  });
 }

 function get_comercios_externos_fromFirebase(){
   refUrbanizacion_comercio_externo.on("value", function(snap){
     var datos = snap.val();
     for(var key in datos){
       var card = document.createElement('div');
       card.className = 'col-md-4';
       card.innerHTML = '<div class="card_comercio_externo">\
                               <div class=""><!--adverso de la carta-->\
                                 <img src="'+datos[key].img+'" alt="" class="img_card">\
                                 <div class="info-card">\
                                   <h3>'+datos[key].nombre+'</h3>\
                                   <h4>'+datos[key].telefono+'</h4>\
                                 </div>\
                                 <button class="btn-show glyphicon glyphicon-plus color-green" onclick="animationflip(this,'+datos[key].latlon+')"></button>\
                               </div>\
                               <div class="disappear"><!--reverso de la carta por defecto invisible-->\
                                 <div class="map-card"></div>\
                                 <div class="info-card">\
                                   <h4>'+datos[key].pagina+'</h4>\
                                   <h4>'+datos[key].descripcion+'</h4>\
                                 </div>\
                                 <button class="btn-show glyphicon glyphicon-minus color-green" onclick="animationflipOut(this)"></button>\
                               </div>\
                         </div>';

       document.getElementById('container_cards').appendChild(card);
     }

   });
  }



   function get_contactos_fromFirebase(){
     refUrbanizacion_contactos.on("value", function(snap){
       var datos = snap.val();
       for(var key in datos){
         var card = document.createElement('div');
         card.className = 'col-md-4';
         card.innerHTML = '<div class="card_contacto">\
                                 <div class=""><!--adverso de la carta-->\
                                   <img src="'+datos[key].img+'" alt="" class="img_card">\
                                   <div class="info-card">\
                                     <h3>'+datos[key].nombre+'</h3>\
                                   </div>\
                                   <button class="btn-show glyphicon glyphicon-plus color-blue" onclick="animationflip(this)"></button>\
                                 </div>\
                                 <div class="disappear"><!--reverso de la carta por defecto invisible-->\
                                   <div></div>\
                                   <div class="info-card">\
                                     <h4>'+datos[key].correo+'</h4>\
                                     <h4>'+datos[key].descripcion+'</h4>\
                                   </div>\
                                   <button class="btn-show glyphicon glyphicon-minus color-blue" onclick="animationflipOut(this)"></button>\
                                 </div>\
                           </div>';

         document.getElementById('container_cards').appendChild(card);
       }

     });
    }
