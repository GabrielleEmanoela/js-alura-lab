var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#add-form");

  var paciente = obtemForm(form);
  // var pacienteTr = montaTr(paciente);

  if (validaPaciente(paciente)) {
    console.log("====================================");
    console.log("não e valido");
    return;
  }
});

function obtemForm(form) {
  var paciente = {
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value),
  };
  return paciente;
}
function montaTr(paciente) {
  var pacienteTr = document.createElement("tr");
  pacienteTr.classList.add("paciente");

  nomeTd.textContent = paciente.nome;
  pesoTd.textContent = paciente.peso;
  alturaTd.textContent = paciente.altura;
  gorduraTd.textContent = paciente.gordura;
  imcTd.textContent = paciente.imc;
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-gorduratd"));
  pacienteTr.appendChild(montaTd(paciente.nome, "info-imc"));

  return pacienteTr;
}
function montaTd(dado) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add("classe");
  return td;
}
function validaPaciente(paciente) {
  if (validaPeso(paciente.peso)) {
    return true;
  }
  return false;
}
