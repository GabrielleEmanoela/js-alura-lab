console.log(document.querySelector("h1"));
var title = document.querySelector("h1");
console.log(title.textContent); //pegando apenas oq tem dentro.
title.textContent = "Mudando o title";
console.log(title.textContent);
//------------------------------------//

var paciente = document.querySelectorAll(".paciente"); //Selecionando todos.

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
  }
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Invalido");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
  }
  console.log(paciente);
  console.log("====================================");
  console.log(tdPeso);
  console.log("====================================");
  console.log(peso);
  console.log("====================================");
  console.log(altura);
  console.log("====================================");
  if (alturaValida && pesoValido) {
    var imc = peso / (altura * altura);
    console.log("====================================");
    console.log(imc);
    console.log("====================================");
    tdImc.textContent = imc.toFixed(2);
  }
}
