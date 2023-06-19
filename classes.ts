// Nome, Peso, Cor, Raça, Tamanho

// Objeto do tipo Dog

const dog: Dog = new Dog()
// Sempre que definimos uma classe o TS cria também um tipo correspondente a ela

// Metodo construtor

class Dog {
    name: string = ""
    weight: number = 0
    color: string = ""
    breed: string = ""
    size: number = 0

    constructor (
        name: string,
        weight: number,
        color: string,
        breed: string,
        size: number
    ) {
        this.name = name
        this.weight = weight
        this.color = color
        this.breed = breed
        this.size = size
    }
    // Metodos
    bark(): void {
        console.log("Au-au")
    }
    // Ouça e sempre que for o nome dele executa ação
    hear(noise: string): void {
        if (noise === this.name) {
            this.bark()
        }
    }
        // Pode possuir um Func (value da tosa)
        calculateHairCut(): number {
            return (this.size = this.weight) / 100
    }
}

// This referencia o objeto a ser criado
// Toda classe é um template

const pop: new Dog("Pop", 15, "preto", "vira lata", 20)
const balu: new Dog("Balu", 25, "caramelo", "vira lata", 30)


// Métodos de classes (Definem nosso modelo)
pop.bark()
balu.bark()


// Propriedade Privadas
// Add a prop (energy) a mesma n está acessivel para leitura/Escrita nas instancias da nossa classe
class Dog {
    name: string = "";
    private energy: number = 100;

    constructor() {}
    
    // Metodos privados
    private isLowEnergy(): boolean {
        return this.energy >= 30;
    }

    private isFull(): boolean {
        return this.energy >= 100;
    }

    bark(): void {
        if(this.energy >= 30) {
            console.log("Au-au");
            this.energy -= 10;
        }
    }

    eat(food: Food): void {
        if(this.energy < 100) {
            this.energy += food.energy;
        }
    }

    hear(noise: string): void {}
}

class Food {
    name: string = "";
    energy: number = 0;

    constructor(name: string, energy: number) {
        this.name = name;
        this.energy = energy;
    }
}

const carrot = new Food("Cenoura", 10);
const bone = new Food ("Osso", 5)