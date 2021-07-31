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
    pacientes.classList.add("paciente-invalido");
  }
  if (altura <= 0 || altura >= 3.0) {
    console.log("Altura Invalido");
    alturaValida = false;
    tdImc.textContent = "Altura Invalida";
    pacientes.classList.add("paciente-invalido"); //Alterando no CSS;
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
//------ Exemplo -----------//
title.addEventListener("click", mensagemq); //escutador de evento.

function mensagemq() {
  console.log("Click and");
}
//---------------------------//
var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#add-form");
  var pacienteTr = document.createElement("tr");
  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var pacienteTr = document.createElement("tr");

  var nomeTd = document.createElement("td"); //cria elemento td
  var pesoTd = document.createElement("td");
  var alturaTd = document.createElement("td");
  var gorduraTd = document.createElement("td");
  var imcTd = document.createElement("td");

  nomeTd.textContent = nome;
  pesoTd.textContent = peso;
  alturaTd.textContent = altura;
  gorduraTd.textContent = gordura;

  pacienteTr.appendChild(nomeTd); //adiciona elemento td na linha
  pacienteTr.appendChild(pesoTd);
  pacienteTr.appendChild(alturaTd);
  pacienteTr.appendChild(gorduraTd);

  var tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);
});
