import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: []
})
export class ListComponent implements OnInit {
  @Input()
  myInputArray;
  v = true;

  constructor() {}

  ngOnInit() {}

  toggle() {
    switch (this.v) {
      case false:
        this.v = true;
        break;
      case true:
        this.v = false;
        break;
    }

    console.log(this.v);
  }
}
