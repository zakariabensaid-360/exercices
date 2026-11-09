const regles = {
  email: {
    regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    message: "Format email invalide (ex: texte@domaine.ext)."
  },
  telephone: {
    regex: /^0[67](?:\s?\d){8}$/,
    message: "Le téléphone doit commencer par 06 ou 07 et contenir 10 chiffres."
  },
  motdepasse: {
    regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
    message: "Le mot de passe doit contenir 8 caractères minimum, une majuscule, une minuscule et un chiffre."
  }
};

const form = document.getElementById("inscription");
const inputs = form.querySelectorAll("input");
const button = form.querySelector("button");
const succes = document.getElementById("succes");

const touched = {};

function valider(nom, valeur) {
  if (!regles[nom]) return "";
  return regles[nom].regex.test(valeur) ? "" : regles[nom].message;
}

function checkFormValidity() {
  const allValid = Array.from(inputs).every(input => {
    return valider(input.name, input.value) === "";
  });
  button.disabled = !allValid;
}

inputs.forEach(input => {
  input.addEventListener("input", (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    touched[name] = true;
    
    const errMessage = valider(name, value);
    const errP = form.querySelector(`p[data-erreur="${name}"]`);
    
    errP.textContent = errMessage;
    
    if (errMessage) {
      input.classList.remove("border-green-500");
      input.classList.add("border-red-500");
    } else {
      input.classList.remove("border-red-500");
      input.classList.add("border-green-500");
    }
    
    checkFormValidity();
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  
  let isValid = true;
  inputs.forEach(input => {
    const errMessage = valider(input.name, input.value);
    const errP = form.querySelector(`p[data-erreur="${input.name}"]`);
    errP.textContent = errMessage;
    if (errMessage) isValid = false;
  });
  

});







form.addEventListener("submit", (e) => {
    e.preventDefault()

    
})