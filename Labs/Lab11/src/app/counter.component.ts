import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-counter",
  template: `
  <button (click)="increase()">+</button>
  <p> {{ counterValue }} </p>
  <button (click)="decrease()">-</button>

  <input value="{{counter}}" (change)="changeValue($event)" (input)="counter=$event.target.value">

  `,
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ["counter"],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ["counterChange"]
})
export class CounterComponent implements OnInit {
  public counterValue: number;
  counter: number = 0;

  constructor() {
    this.counterValue = 0;
  }

  ngOnInit() {}

  increase() {
    this.counterValue++;
  }
  decrease() {
    this.counterValue--;
  }
}
