window.onload = initialize;

//formulario
var formRegister_negocio_interno;


//variable de urbanizacion
var refUrbanizacion;


function initialize(){
formRegister_negocio_interno = document.getElementById('form_negocio_interno');
formRegister_negocio_interno.addEventListener("submit",send_negocio_interno_toFirebase, false);

refUrbanizacion = firebase.database().ref().child("unidad x");
}



function send_negocio_interno_toFirebase(event){
  event.preventDefault();
  refUrbanizacion_negocio_interno= refUrbanizacion.child("negocio_interno");

  refUrbanizacion_negocio_interno.push({
      nombre: event.target.nombre.value,
      descripcion: event.target.descripcion.value,
      telefono: event.target.telefono.value,
      celular: event.target.celular.value,
      bloque: event.target.bloque.value,
      NIT: event.target.nit.value,
      img1: "img1_URL",
      img2: "img2_URL"
  });
 formRegister_negocio_interno.reset();
}
