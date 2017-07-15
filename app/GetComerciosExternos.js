window.onload = initialize;

//variable de urbanizacion
var refUrbanizacion;
//variable de comercio externo en refUrbanizacion
var refUrbanizacion_comercio_externo;


function initialize(){
//se toman las ramas de la unidad y sus negocios internos
refUrbanizacion = firebase.database().ref().child("unidad x");
refUrbanizacion_comercio_externo= refUrbanizacion.child("comercio_externo");

get_comercios_externos_fromFirebase();
}



function get_comercios_externos_fromFirebase(){
  refUrbanizacion_comercio_externo.on("value", function(snap){
    var datos = snap.val();
    for(var key in datos){
      var card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = '<div class="card_comercio_externo invisible">\
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
