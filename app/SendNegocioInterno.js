window.onload = initialize;

//formulario
var formRegister_negocio_interno;


//variable de urbanizacion
var refUrbanizacion;
//variable de negocios internos en refUrbanizacion
var refUrbanizacion_negocio_interno;


function initialize(){
formRegister_negocio_interno = document.getElementById('form_negocio_interno');
formRegister_negocio_interno.addEventListener("submit",send_negocio_interno_toFirebase, false);

//se toman las ramas de la unidad y sus negocios internos
refUrbanizacion = firebase.database().ref().child("unidad x");
refUrbanizacion_negocio_interno= refUrbanizacion.child("negocio_interno");

}



function send_negocio_interno_toFirebase(event){
  event.preventDefault();

  refUrbanizacion_negocio_interno.push({
      nombre: event.target.nombre.value,
      descripcion: event.target.descripcion.value,
      telefono: event.target.telefono.value,
      celular: event.target.celular.value,
      correo: event.target.correo.value,
      pagina: event.target.pagina.value,
      img1: "img1_URL",
      img2: "img2_URL"
  });
 formRegister_negocio_interno.reset();
}
