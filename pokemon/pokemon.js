class Pokemon {
  constructor(name, attack, defense, hp, luck) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
    this.hp = hp;
    this.luck = luck;
  }
  isLucky() {
    let random = Math.floor(Math.random() * 200);
    if (random < this.luck) {
      return true;
    } else {
      return false;
    }
  }
  attackPokemon(pokemon) {
    let a = this.attack - pokemon.defense;
    const min = 0
    pokemon.hp -= a
    if (pokemon.hp < min) {
        pokemon.hp = 0
    }
    return pokemon.hp;
  }
}

let Tortank = new Pokemon("TORTANK", 20, 6, 50, 50);
let Dracofeu = new Pokemon("DRACOFEU", 20, 8, 45, 100);

console.log(Tortank.attackPokemon(Dracofeu));



function jeux(pokemon1, pokemon2) {
  while (pokemon1.hp >= 0 && pokemon2.hp >= 0) {
    if (pokemon1.isLucky() == true) {
        pokemon1.attackPokemon(pokemon2);
        console.log("-------------------------------------------------");
        console.log("Il  reste " + pokemon2.hp + " pv à "+pokemon2.name)
      if (pokemon2.hp <= 0) {
        console.log(pokemon2.name+" a perdu ");
        break;
      }
    }
    if (pokemon2.isLucky() == true) {
        pokemon2.attackPokemon(Tortank);
        console.log("-------------------------------------------------");
        console.log("Il  reste " + pokemon1.hp + " pv à "+pokemon1.name)
      if (pokemon1.hp <= 0) {
        pokemon1.hp = 0;
        console.log(pokemon1.name +" à perdu");
        break;
      }
    }
  }
}

jeux(Tortank, Dracofeu);
