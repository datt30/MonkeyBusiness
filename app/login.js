window.onload = initialize;

//form
var formlogin;


function initialize(){
formLogin = document.getElementById('form_login');
formLogin.addEventListener("submit",loginEvent, false);
}


function loginEvent(event){
  event.preventDefault();
  var id = event.target.usuario.value;
  var clave = event.target.contraseña.value;

  firebase.database().ref('/unidad x/admin/').once('value').then(function(snapshot) {

  var id_firebase = snapshot.val().id;
  var clave_firebase = snapshot.val().clave;

  if(id == id_firebase && clave == clave_firebase){
    $('#messaje_error').addClass('disappear');
    window.location.href = "noticias.html";
    localStorage.setItem("id",id);
    localStorage.setItem("clave",clave);
  }else{
    $('#messaje_error').removeClass('disappear');
  }

  });
}
