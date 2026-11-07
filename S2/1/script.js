const list = document.getElementById("liste")
const resume = document.getElementById("resume")
const etat = {
  filtre: 'tous',
  projets: [
    { id: 1, titre: 'Portfolio', archive: false },
    { id: 2, titre: 'Blog', archive: true },
    { id: 3, titre: 'Quiz', archive: false }
  ]
};


function projetsVisibles(etat) {
  return etat.projets.filter(pr => {
    if (etat.filtre === 'archives') return pr.archive;
    if (etat.filtre === 'actifs') return !pr.archive;
    return true; 
  });
}

/* 
Write render() which empty #liste, creates one 
li per visible and written project 2 projet(s) sur 3 in #resume.
*/

function render() {
  list.replaceChildren()

  const array = projetsVisibles(etat)

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li')
    li.textContent = array[i].titre

    list.append(li)
    
  }


  resume.textContent = String(array.length) + " projet(s) sur 3 "
}

render()

const onglets = document.getElementById("onglets")


onglets.addEventListener("click",(e) => {
  const action = e.target.dataset.filtre

  if(action === "actifs") {
    etat.filtre = "actifs"
    render()
  } else if(action === "archives") {
    etat.filtre = "archives"
    render()
  } else {
    etat.filtre = "tous"
    render()
  }
  
})