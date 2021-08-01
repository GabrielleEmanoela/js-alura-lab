var title = document.querySelector("h1");

var paciente = document.querySelectorAll(".paciente");
for (let i = 0; i < paciente.length; i++) {
  var pacientes = paciente[i];
  var tdPeso = pacientes.querySelector(".info-peso");
  var peso = tdPeso.textContent;
  var tdAltura = pacientes.querySelector(".info-altura");
  var altura = tdAltura.textContent;
  var tdImc = pacientes.querySelector(".info-imc");
  var pesoValido = validaPeso(peso);
  var alturaValida = validaAltura(altura);
  if (!pesoValido) {
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

  function validaPeso(peso) {
    if (peso <= 0 || peso >= 100) {
      return false;
    }
    return true;
  }

  function validaAltura(altura) {
    if (altura <= 0 || altura >= 3.0) {
      return false;
    }
    return true;
  }
  function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
  }
}
