var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#add-form");
  var paciente = obtemForm(form);
  var pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);

  if (erro.length > 0) {
    var mensagemErro = document.querySelector("#mensagem-erro");
    mensagemErro.textContent = erros;
    return;
  }
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  form.reset();
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
  pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
  pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
  pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
  pacienteTr.appendChild(montaTd(paciente.gordura, "info-gorduratd"));
  pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

  return pacienteTr;
}
function montaTd(dado, classe) {
  var td = document.createElement("td");
  td.textContent = dado;
  td.classList.add(classe);
  return td;
}
function validaPaciente(paciente) {
  var erros = [];
  if (!validaPeso(paciente.peso)) erros.push("Peso invalido");

  if (!validaAltura(paciente.altura)) erros.push("Altura invalido");

  return erros;
}
