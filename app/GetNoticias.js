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
refUrbanizacion_noticias= refUrbanizacion.child("noticias");

get_news_fromFirebase();
}


function get_news_fromFirebase(){
  refUrbanizacion_noticias.on("value", function(snap){
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
