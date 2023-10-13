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
  
  let CompteurDeTourAttaquant = 0;
  let CompteurDeTourDefenseur = 0;
  
  while (CompteurDeTourAttaquant < 13 && CompteurDeTourDefenseur < 13) {
    // Sélectionnez un joueur aléatoire d'une équipe aléatoire
    let randomEquipe = Math.random() < 0.5 ? Attaquants : Defenseurs;
    let randomNameIndex = Math.floor(Math.random() * randomEquipe.length);
    let joueurMort = randomEquipe[randomNameIndex];
  
    // Calcul des chances d'amorcer le spike
    let amorcerSpike = randomEquipe === Defenseurs ? Math.random() < 0.6 : Math.random() < 0.4;
  
    console.log(`Le joueur "${joueurMort}" a été tué.`);
    console.log(`Spike amorcé : ${amorcerSpike ? "Oui" : "Non"}`);
  
    // Vérification des conditions de fin de manche
    if (randomEquipe === Attaquants && !amorcerSpike) {
      // Attaquants non amorcent le spike
      if (Math.random() < 0.5) {
        CompteurDeTourAttaquant++;
        console.log("Les attaquants ont gagné la manche !");
      } else {
        CompteurDeTourDefenseur++;
        console.log("Les défenseurs ont gagné la manche !");
      }
    } else if (randomEquipe === Defenseurs && !amorcerSpike) {
      // Défenseurs non amorcent le spike
      if (Math.random() < 0.5) {
        CompteurDeTourAttaquant++;
        console.log("Les attaquants ont gagné la manche !");
      } else {
        CompteurDeTourDefenseur++;
        console.log("Les défenseurs ont gagné la manche !");
      }
    } else if (randomEquipe === Attaquants && amorcerSpike) {
      // Attaquants amorcent le spike
      if (Math.random() < 0.7) {
        CompteurDeTourAttaquant++;
        console.log("Les attaquants ont gagné la manche !");
      } else {
        CompteurDeTourDefenseur++;
        console.log("Les défenseurs ont gagné la manche !");
      }
    } else {
      // Défenseurs amorcent le spike
      if (Math.random() < 0.3) {
        CompteurDeTourAttaquant++;
        console.log("Les attaquants ont gagné la manche !");
      } else {
        CompteurDeTourDefenseur++;
        console.log("Les défenseurs ont gagné la manche !");
      }
    }
  
    // Supprimez le joueur tué du tableau
    randomEquipe.splice(randomNameIndex, 1);
  }
  
  if (CompteurDeTourAttaquant >= 13) {
    console.log("Les attaquants ont gagné la partie !");
  } else {
    console.log("Les défenseurs ont gagné la partie !");
  }
  