let taches = [
  { id: 1, titre: "Lire la doc", faite: false },
  { id: 2, titre: "Écrire les tests", faite: false },
  { id: 3, titre: "Déployer", faite: true },
];

const tasks = document.getElementById("taches");

function CreateList(task) {
  const li = document.createElement("li");
  li.dataset.id = task.id;
  li.textContent = task.titre;
  li.classList = task.faite ? "done" : "";
  const basculer = document.createElement("button");
  basculer.dataset.action = "basculer";
  basculer.textContent = "basculer";
  const dupliquer = document.createElement("button");
  dupliquer.dataset.action = "dupliquer";
  dupliquer.textContent = "dupliquer";
  const monter = document.createElement("button");
  monter.dataset.action = "monter";
  monter.textContent = "monter";
  const supprimer = document.createElement("button");
  supprimer.dataset.action = "supprimer";
  supprimer.textContent = "supprimer";
  li.append(basculer, dupliquer, monter, supprimer);
  return li;
}

const render = () => {
  tasks.replaceChildren();
  let taskLists = taches.map(CreateList);
  tasks.append(...taskLists);
};
render();

tasks.addEventListener("click", (e) => {
  const button = e.target.closest("button");
  const li = button.closest("li");
  const id = li.dataset.id;
  //  console.log(button.dataset.action)
  // if(!button) return
  const actions = {
    basculer: (id) => {
      return taches.map((task) =>
        String(task.id) === String(id) ? { ...task, faite: !task.faite } : task,
      );
    },
    dupliquer: (id) => {
      let index = taches.findIndex((task) => String(task.id) == id);
      let CopiedTask = structuredClone(taches[index]);
      CopiedTask.id = crypto.randomUUID();
      return taches.toSpliced(index + 1, 0, CopiedTask);
    },
    monter: (id) => {
        let index = taches.findIndex((task) => String(task.id) == id);
        return taches.toSpliced(index, 1).toSpliced(0, 0, taches[index])
    },
    supprimer: (id) => {
      return taches.filter((task) => String(task.id) !== id);
    },
  };

  taches = actions[button.dataset.action](id);
  render();
});
