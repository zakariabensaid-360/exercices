'use strict';
let panier = Object.freeze([
  Object.freeze({ id: 1, nom: 'Clavier', prix: 250, qte: 1 }),
  Object.freeze({ id: 2, nom: 'Souris', prix: 90, qte: 2 })
]);

const Cpanier = structuredClone(panier)

const total = document.getElementById("total")
const list = document.getElementById("panier")
function incrementer(panier, id) {
    let found = panier.find(p => p.id == id)
    if(found) {
        found.qte++
        return panier
    } else {
        alert('item not found')
    }
}
function decrementer(panier, id) {
    let found = panier.findIndex(p => p.id == id);

    if (found !== -1) { 
        if (panier[found].qte == 1) {
            panier.splice(found, 1); 
        } else {
            panier[found].qte -= 1;
        }
        return panier
    } else {
        console.log("not found");
    }
}

function ajouter(panier, produit) {
    let found = panier.find(p => p.id == produit.id)
    if(found !== undefined) {
        incrementer(panier, produit.id)
        return panier
    } else {
        panier.push(produit)
    }
}

function CalculateTolal(panier) {
   let all =  panier.reduce((acc, pan) => {
       return acc += (pan.prix * pan.qte)
    }, 0)
    total.textContent = all
}


function afficherPanier(panier) {
    list.replaceChildren()
    for (let i = 0; i < panier.length; i++) {
    const li = document.createElement("li")
    li.textContent = panier[i].qte
    li.dataset.id = panier[i].id
    const incrementBTN = document.createElement("button")
    incrementBTN.textContent = "+"
    incrementBTN.dataset.action = "inc"
    const decrementBTN = document.createElement("button")
    decrementBTN.textContent = "-"
    decrementBTN.dataset.action = "dec"
    li.append(incrementBTN, decrementBTN)
    list.append(li)
    }
}

ajouter(Cpanier, { id: 4, nom: 'test', prix: 90, qte: 10 })
afficherPanier(Cpanier)
CalculateTolal(Cpanier)

list.addEventListener("click", (e) => {
    const button = e.target.closest("button")
    if(!button) {
        return
    }

    const li = button.closest("li")
    if(button.dataset.action == "inc") {
        incrementer(Cpanier, li.dataset.id)
        afficherPanier(Cpanier)
        CalculateTolal(Cpanier)
    } else if(button.dataset.action == "dec") {
        decrementer(Cpanier, li.dataset.id)
        afficherPanier(Cpanier)
        CalculateTolal(Cpanier)
    }
})



