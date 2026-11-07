const depenses = [
  { libelle: 'Marché', categorie: 'Courses', montant: 320 },
  { libelle: 'Bus', categorie: 'Transport', montant: 60 },
  { libelle: 'Cinéma', categorie: 'Loisirs', montant: 90 },
  { libelle: 'Épicerie', categorie: 'Courses', montant: 140 },
  { libelle: 'Taxi', categorie: 'Transport', montant: 85 }
];
const total = document.getElementById("total")
const list  =  document.getElementById("graphique")
let data = depenses.reduce((acc, dep) => {
  acc[dep.categorie] = (acc[dep.categorie] || 0) + (dep.montant || 0);
    return acc
}, {})


let sorted = Object.entries(data).sort((a, b) => b[1] - a[1])
let max = sorted[0][1]


let countTotal = 0
sorted.forEach(element => {
    let percentageWidts =  (element[1] / max) * 100

    countTotal += element[1] 
    const li = document.createElement("li")
    li.style.width = `${percentageWidts}%`
    li.className = "task-card";
    const h1 = document.createElement("h1")
    const span = document.createElement("span")
    h1.textContent = element[0]
    span.textContent = element[1]
    li.append(h1, span)
list.append(li)
})


total.textContent = countTotal 

