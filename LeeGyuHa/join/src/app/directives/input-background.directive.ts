import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[inputBackground]'
})
export class InputBackgroundDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('focus') handleFocusInput() {
    this.inputBgColor('#fff');
  }

  @HostListener('blur') handleBlurInput() {
    this.inputBgColor(null);
  }

  private inputBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement,'backgroundColor', color);
  }
}
