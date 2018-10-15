// Inheritance

class baseObject {
  public width: number = 0;
  public length: number = 0;
  constructor(widht: number, length: number) {
    this.width = widht;
    this.length = length;
  }
}

class rectangle extends baseObject {
  constructor(width: number, length: number) {
    super(width, length);
  }
  calcSize() {
    return this.width * this.length;
  }
}

var rec = new rectangle(5, 2);
console.log(rec.calcSize());
