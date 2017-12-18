
function changeBox()
{
   document.getElementById('contraseña').type="password";
}

function restoreBox()
{
   if(document.getElementById('contraseña').value=='')
   {
     document.getElementById('contraseña').type="text";
   }
}
