function validar(event) {
  event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

  var num_socio = document.getElementById("num_socio").value;
  var clave = document.getElementById("clave").value;

  if ((num_socio == "2434446" && clave == "clave") || (num_socio == "2409588" && clave == "clave")) {
      localStorage.setItem('num_socio', num_socio); // Guardar num_socio en localStorage
      window.location.href = "./index3.html"; // Redirigir a index3.html
  } else {
      alert("NUMERO Y CLAVE INCORRECTAS...");
  }
}

function bienvenido() {
  var num_socio = localStorage.getItem('num_socio');
  var nombre_socio = ""; 

  if (num_socio == "2434446")
      nombre_socio = "facundo!!";
  if (num_socio == "2409588")
      nombre_socio = "vito!!";

  var nameElement = document.getElementById("name_socio");
  if (nameElement) {
      nameElement.innerText = "Bienvenido: " + nombre_socio;
  }
}

// Ejecutar lógica de bienvenida si se está en index3.html
document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname.endsWith('index3.html')) {
      bienvenido();
  }
});

function limpiar() {
  document.getElementById("num_socio").value = "";
  document.getElementById("clave").value = "";
}
