
function getTipoSeguro() {
  let tipoSeguro = document.getElementById('tipo_seguro_id').value;
  myElement = document.forms['contact-form']['valorTipoSeguro'];

  if (tipoSeguro == "basico") {
    myElement.setAttribute('value','$ 500');
  } else if (tipoSeguro == "intermedio") {
    myElement.setAttribute('value','$ 1000');
  } else if (tipoSeguro == "premium") {
    myElement.setAttribute('value','$ 1500');
  }
}

function validarCampos() {
  let nombre = document.formulario.nombre.value;
  let apellido = document.formulario.apellido.value;
  let dni = document.formulario.dni.value;
  let email = document.formulario.email.value;
  let telefono = document.formulario.telefono.value;
  let tipoSeguro = document.formulario.tipo_seguro.value;

  if (nombre == "") {
    document.getElementById('mensajeError_nombre').style.display = "block";
    document.formulario.nombre.focus();
  } else if (apellido == "") {
    document.getElementById('mensajeError_apellido').style.display = "block";
    document.formulario.apellido.focus();
  } else if (dni == "") {
    document.getElementById('mensajeError_dni').style.display = "block";
    document.formulario.dni.focus();
  } else if (email == "") {
    document.getElementById('mensajeError_email').style.display = "block";
    document.formulario.email.focus();
  } else if (telefono == "") {
    document.getElementById('mensajeError_telefono').style.display = "block";
    document.formulario.telefono.focus();
  } else if(tipoSeguro == "Selecciona el tipo") {
    document.getElementById('mensajeError_tipo_seguro').style.display = "block";
  } else {
    document.getElementById('mensajeExito').style.display = "block";
    document.querySelector('#contact-form').reset();
    // location.href = "index.html#contact";
  }
}

function quitarError_nombre() {
  let nombre = document.formulario.nombre.value;
  if (nombre.length >= 0) {
    document.getElementById('mensajeError_nombre').style.display = "none";
  }
}

function quitarError_apellido() {
  let apellido = document.formulario.apellido.value;
  if (apellido.length >= 0) {
    document.getElementById('mensajeError_apellido').style.display = "none";
  }
}

function quitarError_dni() {
  let dni = document.formulario.dni.value;
  if (dni.length >= 0) {
    document.getElementById('mensajeError_dni').style.display = "none";
  }
}

function quitarError_email() {
  let email = document.formulario.email.value;
  if (email.length >= 0) {
    document.getElementById('mensajeError_email').style.display = "none";
  }
}

function quitarError_telefono() {
  let telefono = document.formulario.telefono.value;
  if (telefono.length >= 0) {
    document.getElementById('mensajeError_telefono').style.display = "none";
  }
}

function quitarError_tipoSeguro() {
  let tipoSeguro = document.formulario.tipo_seguro.value;
  if (tipoSeguro == "basico" || tipoSeguro == "intermedio" || tipoSeguro == "premium") {
    document.getElementById('mensajeError_tipo_seguro').style.display = "none";
  }
}
