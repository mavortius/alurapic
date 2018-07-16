import { Directive, ElementRef, HostListener, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appDarkOnHover]'
})
export class DarkOnHoverDirective {

  @Input() brightness = '70%';

  constructor(private el: ElementRef,
              private renderer: Renderer) {
  }

  @HostListener('mouseover')
  darkOn() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', `brightness(${this.brightness})`);
  }

  @HostListener('mouseleave')
  darkOff() {
    this.renderer.setElementStyle(this.el.nativeElement, 'filter', 'brightness(100%)');
  }
}
