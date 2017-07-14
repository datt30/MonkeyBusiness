window.onload = initialize;

//formulario
var formRegister_negocio_interno;


//variable de urbanizacion
var refUrbanizacion;
//variable de negocios internos en refUrbanizacion
var refUrbanizacion_negocio_interno;

//variables para guardar imagen del negocio interno
var storageRef;
var uploadTask;


function initialize(){
formRegister_negocio_interno = document.getElementById('form_negocio_interno');
formRegister_negocio_interno.addEventListener("submit",send_negocio_interno_toFirebase, false);

//se toman las ramas de la unidad y sus negocios internos
refUrbanizacion = firebase.database().ref().child("unidad x");
refUrbanizacion_negocio_interno= refUrbanizacion.child("negocio_interno");

storageRef = firebase.storage().ref('unidadx/');

}



function send_negocio_interno_toFirebase(event){
  event.preventDefault();

  //GUARDAMOS LA IMAGEN
  var file= event.target.img.file;
  storageRef.put(file);

  //GUARDAMOS LOS DATOS
  refUrbanizacion_negocio_interno.push({
      nombre: event.target.nombre.value,
      descripcion: event.target.descripcion.value,
      telefono: event.target.telefono.value,
      celular: event.target.celular.value,
      correo: event.target.correo.value,
      pagina: event.target.pagina.value,
      img1: uploadTask.snapshot.downloadURL
  });


 formRegister_negocio_interno.reset();
}
