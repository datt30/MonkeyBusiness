window.onload = initialize;

//variable de urbanizacion
var refUrbanizacion;
//variable de negocios internos en refUrbanizacion
var refUrbanizacion_negocio_interno;


function initialize(){
//se toman las ramas de la unidad y sus negocios internos
refUrbanizacion = firebase.database().ref().child("unidad x");
refUrbanizacion_negocio_interno= refUrbanizacion.child("negocio_interno");

get_negocios_internos_fromFirebase();
}



function get_negocios_internos_fromFirebase(){
  refUrbanizacion_negocio_interno.on("value", function(snap){
    var datos = snap.val();
    for(var key in datos){
      var card = document.createElement('div');
      card.className = 'col-md-4';
      card.innerHTML = '<div class="card_negocio_interno invisible">\
                            <img src="assets/b2.jpg" alt="" class="img_card">\
                            <div class="info-card">\
                              <h3>'+datos[key].bloque+'</h3>\
                              <h4>'+datos[key].bloque+'</h4>\
                            </div>\
                            <button class="btn-show glyphicon glyphicon-plus color-orange" onclick="animationflip(this)"></button>\
                         </div>';

      document.getElementById('container_cards').appendChild(card);
    }

  });
 }
