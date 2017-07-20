window.onload = initialize;

//formulario
var formRegister_comercio_externo;
//progress-bar (in modal window)
var progress_bar;
var progress_bar_text_below;

//variable de urbanizacion
var refUrbanizacion;
//variable de negocios internos en refUrbanizacion
var refUrbanizacion_comercio_externo;

//variables para guardar img
 var downloadURL;
 var storageRef;
 var uploadTask;



function initialize(){
progress_bar = document.getElementById('progress-bar');
progress_bar_text_below = document.getElementById('progress-bar-txt');

formRegister_comercio_externo = document.getElementById('form_comercio_externo');
formRegister_comercio_externo.addEventListener("submit",send_comercio_externo_toFirebase, false);

refUrbanizacion = firebase.database().ref().child("unidad x");
refUrbanizacion_negocio_interno= refUrbanizacion.child("comercio_externo");
}

function send_comercio_externo_toFirebase(event){
  event.preventDefault();

  //GUARDAMOS LA IMAGEN
  var file = event.target.img.files[0];
  var filename = file.name;
  storageRef = firebase.storage().ref('/unidadx/'+ filename);
  uploadTask = storageRef.put(file);

  uploadTask.on('state_changed', function(snapshot){
    // Observe state change events such as progress, pause, and resume
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
    var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    progress_bar.style.width = progress + '%';
    progress_bar_text_below.textContent = progress.toFixed() + '% completado.';
    switch (snapshot.state) {
      case firebase.storage.TaskState.PAUSED: // or 'paused'
        console.log('Upload is paused');
        break;
      case firebase.storage.TaskState.RUNNING: // or 'running'
        console.log('Upload is running');
        break;
    }
  }, function(error) {
    // Handle unsuccessful uploads
  }, function() {
    // Handle successful uploads on complete
    // For instance, get the download URL: https://firebasestorage.googleapis.com/...
    downloadURL = uploadTask.snapshot.downloadURL;
    console.log(downloadURL);

    //GUARDAMOS LOS DATOS
    refUrbanizacion_comercio_externo.push({
        celular: event.target.celular.value,
        descripcion: event.target.descripcion.value,
        direccion: event.target.direccion.value,
        img: downloadURL,
        latlon: localStorage.getItem("latlon"),
        nombre: event.target.nombre.value,
        correo: event.target.correo.value,
        pagina: event.target.pagina.value,
        telefono: event.target.telefono.value
     });
    formRegister_comercio_externo.reset();
  });

}
