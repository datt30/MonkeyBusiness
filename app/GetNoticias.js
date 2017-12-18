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
    datos = snap.val();
    var index=0;
    for(var key in datos){
      index++;
      var linesContent = document.createElement('tr');
      linesContent.innerHTML = '<td>'+index+'</td>\
                                <td><img class="img-news" src="'+datos[key].img+'"></td>\
                                <td>'+datos[key].titulo+'</td>\
                                <td>'+datos[key].texto+'</td>\
                                <td class="button-content">\
                                  <button type="button" class="btn btn-default btn-sm" data-convalidation="'+key+'" onclick="edit_patrocinador(this)">\
                                    <span class="glyphicon glyphicon-pencil"></span>\
                                  </button>\
                                </td>\
                                <td class="button-content">\
                                  <button type="button" class="btn btn-default btn-sm" data-convalidation="'+key+'" onclick="remove_patrocinador(this)">\
                                    <span class="glyphicon glyphicon-trash"></span>\
                                  </button>\
                                </td>';

      document.getElementById('news-lines').appendChild(linesContent);
    }

  });
 }
