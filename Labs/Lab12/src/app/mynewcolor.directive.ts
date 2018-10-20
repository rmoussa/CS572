import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  Renderer2,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[appMynewcolor]"
})
export class MynewcolorDirective {
  @Input()
  color: string;
  @Output()
  OnColorChanged: EventEmitter<string>;
  constructor(private element: ElementRef) {
    this.OnColorChanged = new EventEmitter();
  }
  ngOnInint() {}

  @HostListener("keyup")
  changeColor() {
    this.element.nativeElement.style.color = this.element.nativeElement.value;
    console.log("In MynewcolorDirective input color is: " + this.color);
    this.emitColor(this.element.nativeElement.value);
    console.log(this.element.nativeElement.value);
    return;
  }
  emitColor(clr) {
    this.OnColorChanged.emit(clr);
  }
}
