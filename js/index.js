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
  if (peso <= 0 || peso >= 100) {
    pesoValido = false;
    tdImc.textContent = "Peso Invalido";
    pacientes.classList.add("paciente-invalido");
  }
  if (altura <= 0 || altura >= 3.0) {
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
    pacientes.classList.add("paciente-invalido");
  }

  if (alturaValida && pesoValido) {
    var imc = calculaImc(peso, altura);
    tdImc.textContent = imc;
  }
  function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}
