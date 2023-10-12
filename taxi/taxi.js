let musiques = ["Anissa", "Young", "Home", "Pride", "Cry"];

// class Personnage {
//   constructor(prenom, santeMentale) {
//     this.prenom = prenom;
//     this.santeMentale = santeMentale;
//   }
// }

// class Trajet {
//   constructor(radio, feuxRouge, changement) {
//     this.radio = radio;
//     this.feuxRouge = feuxRouge;
//     this.changement = changement;
//   }
// }

const Personnage = {
  prenom: "thomas",
  santeMentale: "10",
};

const Trajet = {
  radio: musiques[Math.floor(Math.random() * musiques.length)],
  feuxRouge: 30,
  changement: 0,
};
// let traj = new Trajet("", 30, 0);

for (let i = 1; i <= Trajet.feuxRouge; ) {
  Trajet.radio = musiques[Math.floor(Math.random() * musiques.length)];
  console.log(
    "La musique du trajet est " +
      Trajet.radio +
      ". Il reste " +
      (Trajet.feuxRouge -= 1) +
      " feux rouge."
  );

  if (Trajet.radio === "Anissa") {
    Personnage.santeMentale -= 1;
    console.log(
      "Thomas est tombé sur la musique ANISSA!!! il perd 1 de santé mentale, il lui reste " +
        Personnage.santeMentale +
        " points."
    );
    Trajet.changement += 1;
  }
  if (Personnage.santeMentale == 0) {
    console.log("explosion");
    break;
  }
}
