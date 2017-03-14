var nombre = document.getElementById("textoNombre");
var span = document.getElementById("span");
var color = document.getElementById("textColor");
var btn = document.getElementById("btnCambios");
var black = document.getElementById("negra");
var cursi = document.getElementById("cursiva");
var select = document.getElementById("select");
//var btnTrans = document.getElementById("btnTrn");


btn.addEventListener("click", ponerNombre);
btn.addEventListener("click", cambiarHexa);
btn.addEventListener("click", transformar);

//btnTrans.addEventListener("click", transformar);



function ponerNombre() {
  var fecha = new Date();
  var nombreBien = true;
  var hora = fecha.getHours();
  hora = parseInt(hora);
  function validarFormulario() {
    if (hora >= 18 && hora <= 4) {
      span.innerHTML = "Buenas noches ";
      //span.innerHTML += nombre.value;
    }
    else if (hora >= 5 && hora <= 12) {
      span.innerHTML = "Buenos dias ";
    }
    else {
      span.innerHTML = "Buenas tardes ";
    }
    if (select.selectedIndex == 0) {
      console.log("No selecciono ningun titulo");
    }
    else if (select.selectedIndex == 1) {
      span.innerHTML += "Sr.";
    }
    else if (select.selectedIndex == 2) {
      span.innerHTML += "Sra.";
    }
    else if (select.selectedIndex == 3) {
      span.innerHTML += "Algo.";
    }
    else {
      //(select.selectedIndex == 4)
      span.innerHTML += "Otro Titulo.";
    }
    span.innerHTML += nombre.value;
  }
  if (nombre.value.length <= 2) {
    nombreBien = false;
    span.innerHTML = "El nombre debe de tener mas de dos caracteres";
    span.style.color = "red";
  }
  if (!nombreBien) {
    nombre.className = "error"
  }
  if (nombreBien == true) {
    validarFormulario();
    nombre.className = "texto"
    span.style.color = "black";
  }
}
function cambiarHexa() {
  var colorValido = true
  function validarColor() {
    if (color.value) {
      span.style.color = color.value;
    }
    else if (color.value == "#"+color.value) {
      span.style.color = color.value;
    }
  }
  if (color.value == "") {
    validarColor()
  }
  else if (color.value.length < 3) {
    colorValido = false
    span.innerHTML = "El color que ingreso no es valido"
  }
  if (colorValido) {
    validarColor()
  }
}
function transformar() {
  if (cursi.checked == true) {
    //console.log("checked cursi");
    span.style.fontStyle = "italic";
  }
  if (black.checked == true) {
    span.style.fontWeight="bold";
  }
  if (cursi.checked == false) {
    span.style.fontStyle = "normal";
    //console.log(cursi);
  }
  if (black.checked == false) {
    span.style.fontWeight = "normal";
    //console.log(black);
  }
  if (black.checked != true && cursi.checked != true){
    span.style.fontStyle = "normal";
    span.style.fontWeight = "normal";
    //(black.checked != true && cursi.checked != true)
  }
}
//function validarFormulario() {
//}
