// const btn = document.querySelectorAll(".principal-lista");
const itemativo = document.querySelector("#itemaitvaRep");
const itemativaStar = document.querySelector("#itemaitvaStar");

function marcarR(event) {
  event.preventDefault();
  itemativo.classList.toggle("ativa");
}

function marcars(event) {
  event.preventDefault();
  itemativaStar.classList.toggle("ativa");
}

itemativo.addEventListener("click", marcarR);
itemativaStar.addEventListener("click", marcars);
