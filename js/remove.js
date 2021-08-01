var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function (event) {
  //parentNode = pai do elemento clicado.
  //event.target = filho elemento clicado

  event.target.parentNode.classList.add("fadeOut");
  setTimeout(function () {
    event.target.parentNode.remove();
  }, 600);
});
