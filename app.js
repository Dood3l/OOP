class pokemon {
    constructor(name, type, attack) {
        this.name = name;
        this.type = type;
        this.attack = attack;
    }
    attacked = () => {
        console.log(`${this.name}, used ${this.attack}!`)
    }
}

const Charizard = new pokemon("Charizard", "Fire", "Overheat");
const Lucario = new pokemon("Lucario", "Steel", "Aura Sphere");

Charizard.attacked();
Lucario.attacked();