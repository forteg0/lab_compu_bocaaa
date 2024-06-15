function validar() {
  var usuario = document.getElementById("nombre").value;
  var clave = document.getElementById("clave").value;

  if (usuario == "eduardo" && clave == "123456") {
    window.location.href = "./index3.html";
  } else {
    alert("USUARIO Y CLAVE INCORRECTAS...");
  }
}

function limpiar() {
  document.getElementById("nombre").value = "";
  document.getElementById("clave").value = "";
}

function afiliar() {
  document.getElementById("nombre").value = "";
  document.getElementById("apellido").value = "";
  document.getElementById("dni").value = "";
  document.getElementById("edad").value = "";

  document.getElementById("resultado").textContent = "USUARIO AFILIADO";
}

function precio() {
  var v1 = document.getElementById("marca").value;
  var v2 = document.getElementById("modelo").value;

  if (v1 == 1 && v2 == 1) {
    document.getElementById("resultado2").textContent =
      "EL PRECIO ES 12.000.000 DE PESOS";
  }

  if (v1 == 1 && v2 == 2) {
    document.getElementById("resultado2").textContent =
      "EL PRECIO ES 10.000.000 DE PESOS";
  }

  if (v1 == 1 && v2 == 3) {
    document.getElementById("resultado2").textContent =
      "EL PRECIO ES 11.000.000 DE PESOS";
  }
}

function calcular() {
  var valor1 = parseFloat(document.getElementById("n1").value);
  var valor2 = parseFloat(document.getElementById("n2").value);
  var op = document.getElementById("opera").value;
  var resultado;

  if (op == 1) {
    resultado = valor1 + valor2;
  }

  if (op == 2) {
    resultado = valor1 - valor2;
  }

  if (op == 3) {
    resultado = valor1 * valor2;
  }

  document.getElementById("resultado2").textContent =
    "EL RESULTADO ES:" + resultado;
}
