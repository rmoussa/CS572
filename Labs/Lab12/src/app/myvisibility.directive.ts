import {
  Directive,
  ElementRef,
  Renderer2,
  OnChanges,
  Input
} from "@angular/core";

@Directive({
  selector: "[appMyvisibility]"
})
export class MyvisibilityDirective implements OnChanges {
  @Input()
  appMyvisibility: boolean;
  constructor(private element: ElementRef, private renderer2: Renderer2) {}
  ngOnChanges() {
    let displaying = "block";
    if (!this.appMyvisibility) {
      displaying = "none";
    }
    this.renderer2.setStyle(this.element.nativeElement, "display", displaying);
  }
}
