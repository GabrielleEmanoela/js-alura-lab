console.log(document.querySelector("h1"));
var title = document.querySelector("h1");
console.log(title.textContent); //pegando apenas oq tem dentro.
title.textContent = "Mudando o title";
console.log(title.textContent);
//------------------------------------//

var paciente = document.querySelector("#primeiropaciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;
var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
var tdImc = paciente.querySelector(".info-imc");

console.log(paciente);
console.log("====================================");
console.log(tdPeso);
console.log("====================================");
console.log(peso);
console.log("====================================");
console.log(altura);
console.log("====================================");

var imc = peso / (altura * altura);
console.log("====================================");
console.log(imc);
console.log("====================================");
tdImc.textContent = imc;
