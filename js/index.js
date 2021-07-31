var title = document.querySelector("h1");

var paciente = document.querySelectorAll(".paciente");
for (let i = 0; i < paciente.length; i++) {
  var pacientes = paciente[i];
  var tdPeso = pacientes.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = pacientes.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdImc = pacientes.querySelector(".info-imc");
  var pesoValido = true;
  var alturaValida = true;
  if (peso <= 0 || peso >= 1000) {
    console.log("Peso Invalido");
    pesoValido = false;
    tdImc.textContent = "Peso Invalido";
    pacientes.classList.add("paciente-invalido");
  }
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Invalido");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
    pacientes.classList.add("paciente-invalido"); //Alterando no CSS;
  }

  if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc.toFixed(2);
  }
}
