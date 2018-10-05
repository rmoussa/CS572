const Events = require("events");
class Gym extends Events {
  constructor() {
    super();
  }
  go() {
    let go = () => console.log("Athlete is working out");
    this.on("go", go);
    let periodicalGo = () => this.emit("go");
    setInterval(periodicalGo, 1000);
  }
}

const gymInstance = new Gym();
gymInstance.go();
