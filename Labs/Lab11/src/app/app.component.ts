import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `<p> {{ ComponentCounterValue }} </p>
  <app-counter (onLunchBreak)="otherChanged($event)"></app-counter>
  `,
  styleUrls: ["./app.component.css"],
  // tslint:disable-next-line:use-output-property-decorator
  outputs: ["ComponentCounterValue"]
})
export class AppComponent {
  title = "Lab11";

  otherChanged(e: string) {console.log(`Message: ${e}`); // Yes finally!! I'm hungry!}

  // otherChanged(e) {
  //   this.ComponentCounterValue = e;
  // }
}
