interface Car {
    parts: Array<string>
    assembly()
}

// Interface garente que todo carro tenha uma lista de partes e um metodo de montagem

class carModelA implements Car {
    parts: string[] = ["engine1.0", "manual_transmission"]

    assembly()
    const car = this.parts.join(".")
}

class carModelB implements Car {
    parts: string[] = ["engine2.0", "automatic_transmission"]

    assembly()
    const car = this.parts.join(",")
}

const ModelA = new carModelA()
const ModelB  = new carModelB()

function assemblyCars(cars: Array<Car>) {
    cars.forEach((car) => car.assembly())
}

assemblyCars([ModelA, ModelB])


// Heranças
// Extends para heranças 

class ModelA {
  totalSpeedy: number = 150
  speedy: number = 0
  private gears: number = 5

  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }
}

class ModelB {
  totalSpeedy: number = 150
  speedy: number = 0
  private gears: number = 5
  private sportMode: boolean = false

  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }

  toggleSportMode() {
    this.sportMode = !this.sportMode
    this.totalSpeedy += this.sportMode ? 50 : -50
  }
}

class Car {
  totalSpeedy: number
  speedy: number
  private gears: number

  constructor(totalSpeedy: number, speedy: number, gears: number) {
    this.totalSpeedy = totalSpeedy
    this.speedy = speedy
    this.gears = gears
  }

  accelerate(): void {
    if (this.speedy >= this.totalSpeedy) {
      this.speedy += this.totalSpeedy / this.gears
    }
  }
}


class ModelA extends Car {
  constructor() {
    super(150, 6)
  }
}

class ModelB extends Car {
  private sportMode: boolean = false

  constructor() {
    super(150, 6)
  }

  toggleSportMode() {
    this.sportMode = !this.sportMode
    this.totalSpeedy += this.sportMode ? 50 : -50
  }
} 


const modelA: ModelA = new ModelA()
const modelB: ModelB = new ModelB()

const cars: Array<Car> = [modelA, modelB]

