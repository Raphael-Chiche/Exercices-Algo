const Tueur = {
    name: "Jason",
    PV: 100,
  };
  
  const NameSurvivor = [
    "Thomas",
    "Raphaël",
    "Achille",
    "Pierre",
    "Louca",
    "Michel",
  ];
  
  class Caractéristique {
    constructor(name, ProbaMourir, chanceDegat, mourirDegat) {
      this.name = name;
      this.ProbaMourir = ProbaMourir;
      this.chanceDegat = chanceDegat;
      this.mourirDegat = mourirDegat;
    }
  }
  
  let nerd = new Caractéristique("Nerd", 0.35, 0.65, 0.02);
  let sportif = new Caractéristique("Sportif", 0.1, 0.6, 0.03);
  let blond = new Caractéristique("Blond", 0.6, 0.12, 0);
  let intelo = new Caractéristique("Intelo", 0.05, 0.9, 0.01);
  let bete = new Caractéristique("Bete", 0.55, 0.2, 0.05);
  let jeune = new Caractéristique("Jeune", 0.5, 0.5, 0.05);
  let vieux = new Caractéristique("Vieux", 0.8, 0.8, 0.05);
  
  const Caractéristiques = [nerd, sportif, blond, intelo, bete, jeune, vieux];
  
  const Survivants = {};
  
  for (let i = 0; i < 5; i++) {
    let randomNameIndex = Math.floor(Math.random() * NameSurvivor.length);
    let randomName = NameSurvivor[randomNameIndex];
    let randomCaracteristique = Caractéristiques[Math.floor(Math.random() * Caractéristiques.length)];
    NameSurvivor.splice(randomNameIndex, 1);
    Survivants[randomName] = randomCaracteristique;
  }
  
  const commentaire = [];
  
  while (Tueur.PV > 0 && Object.keys(Survivants).length > 0) {
    Object.keys(Survivants).forEach((key) => {
      const value = Survivants[key];
      const probaMourir = Math.random();
  
      if (probaMourir <= value.ProbaMourir) {
        commentaire.push("Jason a tué " + key);
        delete Survivants[key];
      } else {
        const chanceDegat = Math.random();
        const mourirDegat = Math.random();
  
        if (chanceDegat <= value.chanceDegat) {
          Tueur.PV -= 10;
          commentaire.push(value.name + " a esquivé et inflige 10 points de dégâts au Tueur");
        } 
        if (mourirDegat <= value.mourirDegat) {
          Tueur.PV -= 15;
          commentaire.push(value.name + " inflige 15 points de dégâts au Tueur mais meurt");
          delete Survivants[key];
        }
      }
      if (Tueur.PV <= 0){
        commentaire.push("Le tueur est mort !");
        
      }
    });
  }
  
  if (Object.keys(Survivants).length === 0) {
    commentaire.push("Jason a tué tout le monde");
  }
  
  console.log("Commentaire : ");
  commentaire.forEach((comment) => console.log(comment));
  