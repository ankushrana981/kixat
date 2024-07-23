
import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[restrictWhiteSpace]'
})

export class RestrictWhiteSpace {

  regexStr = '^[a-zA-Z0-9_ ]*$';
  @Input() isAlphaNumeric: boolean = false;

  constructor(private el: ElementRef) { }

  @HostListener('keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {

    if (this.el.nativeElement.selectionStart === 0 && event.key === ' ') {
      event.preventDefault();
    }
  }

}