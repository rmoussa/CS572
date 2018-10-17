import { Component, OnInit, EventEmitter } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
  <button (click)="increase()">+</button>
  <p> {{ counter }} </p>
  <button (click)="decrease()">-</button>

  <input value="{{counter}}" (change)="changeValue($event)"
    (input)="counter=$event.target.value">

  `,
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ["counter"],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ["counterChange"]
})
export class CounterComponent implements OnInit {
  counterChange: EventEmitter<number>;
  public counterValue: number;
  counter: number = 1;

  constructor() {
    this.counterValue = this.counter;
    this.counterChange = new EventEmitter();
  }

  ngOnInit() {}

  increase() {
    // this.counterValue++;
    this.counter++;
  }
  decrease() {
    // this.counterValue--;
    this.counter--;
  }

  changeValue(e): void {
    this.counterChange.emit(e.target.value);
  }
}
