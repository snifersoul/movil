var nombre = document.getElementById("nombre");
var telefono = document.getElementById("telefono");
var correo = document.getElementById("correo");

function enviar(){
    var nombre= $("#nombre").val();
    var telefono= parseFloat($("#telefono").val());
    var correo= $("#correo").val();
    alert("apreciado " + nombre+" hemos recibido su mensaje. nos comunicaremos al telefono "+telefono+" o direccion de email "+correo)
}