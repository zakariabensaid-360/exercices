const villes = ['Agadir', 'Casablanca', 'Chefchaouen', 'Essaouira', 'Fès', 'Marrakech', 'Meknès', 'Rabat', 'Tanger', 'Tétouan'];
let appels = 0;

const chercher = (texte) => {


  appels++;
  

  const resultat = texte == "" ? [] : villes.filter((v) => v.toLowerCase().includes(texte.toLowerCase()));
  
  info.textContent = `Appels : ${appels} | ${resultat.length} résultats trouvés`;

    resultats.replaceChildren()
  resultat.forEach(result => {
    const li =  document.createElement("li")
    li.textContent = result
    li.style.font = "bold"

    resultats.append(li)
  })
  
};


function antiRebond(fn, delay) {
    let timer;
    
    return (texte) =>  {
        info.textContent = "Recherche...";
        clearTimeout(timer)
         timer = setTimeout(() => {
            fn(texte)
        }, delay)
    }
}


const input = document.getElementById("recherche");
const info = document.getElementById("info");
const resultats = document.getElementById("resultats")

const noRebound = antiRebond(chercher, 300);

input.addEventListener("input", (e) => {
  noRebound(e.target.value);
});