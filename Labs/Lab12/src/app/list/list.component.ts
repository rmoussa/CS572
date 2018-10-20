import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: []
})
export class ListComponent implements OnInit {
  @Input()
  myInputArray;
  isVisible = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    switch (this.isVisible) {
      case false:
        this.isVisible = true;
        break;
      case true:
        this.isVisible = false;
        break;
    }
    console.log(this.isVisible);
  }

  displayColor(value) {
    console.log("An element changed its color to " + value);
  }
}
