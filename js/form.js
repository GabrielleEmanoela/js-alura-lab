var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function (event) {
  event.preventDefault();
  var form = document.querySelector("#add-form");
  var paciente = obtemForm(form);
  var pacienteTr = montaTr(paciente);
  var erros = validaPaciente(paciente);

  if (erros.length > 0) {
    exibeMensageErro(erros);
    return;
  }
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
  addPacienteTable(paciente);
  form.reset();
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = "";
});
function exibeMensageErro(erros) {
  var ul = document.querySelector("#mensagens-erro");
  ul.innerHTML = ""; // limpa o conteudo anterior
  erros.forEach(function (error) {
    var li = document.createElement("li");
    li.textContent = error;
    ul.appendChild(li);
  });
}
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

function addPacienteTable(paciente) {
  var pacienteTr = montaTr(paciente);
  var tabela = document.querySelector("#tabela-pacientes");
  tabela.appendChild(pacienteTr);
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
  if (paciente.nome.length == 0) erros.push("Nome não preenchido");
  if (paciente.gordura.length == 0) erros.push("Gordura não preenchida");
  if (!validaPeso(paciente.peso)) erros.push("Peso invalido");
  if (!validaAltura(paciente.altura)) erros.push("Altura invalido");

  return erros;
}
