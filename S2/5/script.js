const equipes = [
  { nom: "Atlas", ville: "Fès", score: 42 },
  { nom: "Zénith", ville: "Agadir", score: 57 },
  { nom: "Écho", ville: "Tanger", score: 42 },
  { nom: "Delta", ville: "Oujda", score: 13 },
];
const entetes = document.getElementById("entetes");
const corps = document.getElementById("corps");
const render = (data) => {
  corps.replaceChildren();
  data.forEach((equipe) => {
    const tr = document.createElement("tr");
    const tdNom = document.createElement("td");
    const tdVille = document.createElement("td");
    const tdScore = document.createElement("td");
    tdNom.textContent = equipe.nom;
    tdVille.textContent = equipe.ville;
    tdScore.textContent = equipe.score;

    tr.append(tdNom, tdVille, tdScore);
    corps.append(tr);
  });
};
let arrowUp = "▲"
let arrowDown = "▼"
render(equipes);
let counterName = 1;
let counterScore = 1;
entetes.addEventListener("click", (e) => {
  const th = e.target.closest("th");
  document.querySelectorAll("th").forEach(th => {
    if(th.textContent.includes(arrowDown) || th.textContent.includes(arrowUp)) {
        console.log(th.textContent)
        th.textContent = th.textContent.slice(0, th.textContent.length - 1)
    }
  })
  if (!th) return;
  const cle = th.dataset.cle;

  if (cle == "nom") {
    if (counterName % 2 == 0) {
      let sorted = equipes.sort((a, b) => a.nom.localeCompare(b.nom));
      render(sorted);
      th.textContent = "Nom " + arrowUp
    } else {
      let sorted = equipes.sort((a, b) => b.nom.localeCompare(a.nom));
      render(sorted);
      th.textContent = "Nom " + arrowDown
    }
    counterName++;
  } else if (cle == "ville") {
    let sorted = equipes.sort((a, b) => a.ville.localeCompare(b.ville));
    render(sorted);
  } else {
    if (counterScore % 2 == 0) {
      let sorted = equipes.sort((a, b) => b.score - a.score == 0 ? a.nom.localeCompare(b.nom) : b.score - a.score);
      render(sorted);
      th.textContent = "Score " + arrowUp
    } else {
      let sorted = equipes.sort((a, b) => a.score - b.score == 0 ? a.nom.localeCompare(b.nom) : a.score - b.score);
      render(sorted);
      th.textContent = "Score " + arrowDown
    }
    counterScore++
  }
});
