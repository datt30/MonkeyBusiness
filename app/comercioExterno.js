window.onload = initialize;

//formulario
var formRegister_comercio_externo;
//variable de urbanizacion
var refUrbanizacion;


function initialize(){
formRegister_comercio_externo = document.getElementById('form_comercio_externo');
formRegister_comercio_externo.addEventListener("submit",send_comercio_externo_toFirebase, false);

refUrbanizacion = firebase.database().ref().child("unidad x");
}

function send_comercio_externo_toFirebase(){
  event.preventDefault();
  refUrbanizacion_comercio_externo= refUrbanizacion.child("comercio_externo");

  refUrbanizacion_comercio_externo.push({
      NIT: event.target.nit.value,
      celular: event.target.celular.value,
      descripcion: event.target.descripcion.value,
      direccion: event.target.direccion.value,
      img1: "imagen1",
      img2: "imagen2",
      latlon: event.target.lat_lon.value,
      nombre: event.target.nombre.value,
      telefono: event.target.telefono.value
  });
 formRegister_comercio_externo.reset();
}
