// Soldier
class Soldier { 
  constructor (health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength;
  }

  receiveDamage(demage) {
    this.health = health - (demage)
  }
}


// Viking
class Viking extends Soldier{
  constructor (name, health, strength) {
    super (name, health, strength) {
      this.name = name;
      this.health = health;
      this.strength = strength;
    }

    changeAttack(atack() => {return this.strength});  

    changeDamage(this.receiveDamage(demage) => { if (this.health > damage) {
      this.health -= damage;
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return `${this.name} has died in act of combat`;
    }
  })

  battleCry() {
    return 'Odin Owns You All!';

  }

}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }
  receiveDamage(damage) {
    if (this.health > damage) {
      this.health -= damage;
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return 'A Saxon has died in combat';
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  receiveDamage(damage) {
    this.health -= damage;
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }
  vikingAttack() {}
  saxonAttack() {}
  showStatus() {}
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
