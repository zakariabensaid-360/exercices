let produits = Array.from({ length: 23 }, (_, i) => ({
  id: i + 1,
  nom: `Produit ${i + 1}`,
}));
const PAR_PAGE = 5;

function pageCourante(donnees, page, parPage) {
  const start = (page - 1) * parPage;
  const end = start + parPage;
  return donnees.slice(start, end);
}

const next = document.createElement("button");
const previos = document.createElement("button");
next.textContent = "next"
previos.textContent = "previos"
let currentPage = 1;

next.addEventListener("click", () => {
  currentPage++;
  data = pageCourante(produits, currentPage, PAR_PAGE);
  document.querySelector("ul").replaceChildren();
  data.forEach((element) => {
    document.querySelector("ul").innerHTML += "<li>" + element.nom + "</li>";
  });
});

previos.addEventListener("click", () => {
  if (currentPage == 1) return;
  currentPage--;
  data = pageCourante(produits, currentPage, PAR_PAGE);
  document.querySelector("ul").replaceChildren();
  data.forEach((element) => {
    document.querySelector("ul").innerHTML += "<li>" + element.nom + "</li>";
  });
});


document.body.append(next, previos)
