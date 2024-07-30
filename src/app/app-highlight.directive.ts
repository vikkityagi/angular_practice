import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAppHighlight]',
  standalone: true
})
export class AppHighlightDirective {

  @Input('appHighlight') highlightColor!: string;

  private defaultColor = 'yellow';

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: any) {
    this.el.nativeElement.style.backgroundColor = color;
  }

}
