class Car {
  public acceleration: number = 0;
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  honk() {
    console.log(`${this.name} is saying Tooooooooooot!`);
  }

  accelerate(speed: number) {
    this.acceleration += speed;
  }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(60);
console.log(car.acceleration);
