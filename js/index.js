console.log(document.querySelector("h1"));
var title = document.querySelector("h1");
console.log(title.textContent); //pegando apenas oq tem dentro.
title.textContent = "Mudando o title";
console.log(title.textContent);
