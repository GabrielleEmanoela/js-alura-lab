var filtro = document.querySelector("#filtrar-tabela");
filtro.addEventListener("input", function () {
  var pacientes = document.querySelectorAll(".paciente");
  for (let i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdNome = paciente.querySelector(".info-nome");
    var nome = paciente.textContent;
  }
});
