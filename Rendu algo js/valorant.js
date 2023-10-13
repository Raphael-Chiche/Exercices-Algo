let Attaquants = [
  "Omen Attaquant",
  "Phoenix Attaquant",
  "Jett Attaquant",
  "Fade Attaquant",
  "Chamber Attaquant",
];

let Defenseurs = [
  "Omen Defenseur",
  "Phoenix Defenseur",
  "Jett Defenseur",
  "Fade Defenseur",
  "Chamber Defenseur",
];

let Equipe = [Attaquants, Defenseurs];

let CompteurDeTourAttaquant = 0;
let CompteurDeTourDefenseur = 0;

let probatuer = 50;
while (CompteurDeTourAttaquant != 13 && CompteurDeTourDefenseur != 13) {
  Attaquants = [
    "Omen Attaquant",
    "Phoenix Attaquant",
    "Jett Attaquant",
    "Fade Attaquant",
    "Chamber Attaquant",
  ];
  Defenseurs = [
    "Omen Defenseur",
    "Phoenix Defenseur",
    "Jett Defenseur",
    "Fade Defenseur",
    "Chamber Defenseur",
  ];
  let amorcerspike = 0;

  let randomEquipeIndex = Math.floor(Math.random() * Equipe.length);
  let randomEquipe = Equipe[randomEquipeIndex];

  let randomNameAttaquant = Math.floor(Math.random() * Attaquants.length);
  let randomNameDefenseur = Math.floor(Math.random() * Defenseurs.length);

  if (randomEquipe === Equipe[0]) {
    console.log(
      Attaquants[randomNameAttaquant] +
        " tue " +
        Defenseurs[randomNameDefenseur]
    );
    Equipe[1].splice(randomNameDefenseur, 1);
    console.log(Equipe[1]);
  } else if (randomEquipe === Equipe[1]) {
    console.log(
      Defenseurs[randomNameDefenseur] +
        " tue " +
        Attaquants[randomNameAttaquant]
    );
    Equipe[0].splice(randomNameAttaquant, 1);
    console.log(Equipe[0]);
  }

  if (Equipe[0].length === 4) {
    amorcerspike = 40;
  }
  if (Equipe[1].length === 4) {
    amorcerspike = 60;
  }

  if (Math.floor(Math.random() * 100) < amorcerspike) {
    probatuer = 70;
  } else {
    probatuer = 50;
  }

  while (Equipe[0].length != 0 && Equipe[1].length != 0) {
    let randomNameAttaquant = Math.floor(Math.random() * Attaquants.length);
    let randomNameDefenseur = Math.floor(Math.random() * Defenseurs.length);
    console.log(Equipe[0]);

    if (Math.floor(Math.random() * 100) < probatuer) {
      Equipe[1].splice(randomNameDefenseur, 1);
      console.log("def tue att");
    } else {
      Equipe[0].splice(randomNameAttaquant, 1);
      console.log("att tue def");
    }
  }

  if (Equipe[0].length === 0) {
    CompteurDeTourAttaquant += 1;
    // console.log(Attaquants);
    console.log(CompteurDeTourAttaquant + "att");
  }
  if (Equipe[1].length == 0) {
    CompteurDeTourDefenseur += 1;
    console.log(CompteurDeTourDefenseur + "def");
  }
}

if (CompteurDeTourAttaquant === 13) {
  console.log("attaquant a gagné");
}
if (CompteurDeTourDefenseur === 13) {
  console.log("Defenseurs  a gagne");
}
