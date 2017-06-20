window.onload = initialize;

//formulario
var formRegister_contactos;

//variable de urbanizacion
var refUrbanizacion;


function initialize(){
formRegister_contactos = document.getElementById('form_contactos');
formRegister_contactos.addEventListener("submit",send_contactos_toFirebase, false);

refUrbanizacion = firebase.database().ref().child("unidad x");
}





function send_contactos_toFirebase(){
  event.preventDefault();
  refUrbanizacion_contactos= refUrbanizacion.child("contactos");

  refUrbanizacion_contactos.push({
      celular: event.target.celular.value,
      correo: event.target.correo.value,
      descripcion: event.target.descripcion.value,
      direccion: event.target.direccion.value,
      img1: "imagen1",
      img2: "imagen2",
      nombre: event.target.nombre.value
  });
 formRegister_contactos.reset();
}
