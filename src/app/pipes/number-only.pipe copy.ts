
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[numberOnly]'
})

export class NumberOnlyPipe {

  @HostListener('keydown', ['$event'])

  onKeyDown(event: KeyboardEvent) {
    let specialKeys = [8];
    let keyCode = event.which ? event.which : event.keyCode;
    if ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 96 && keyCode <= 105) || specialKeys.indexOf(keyCode) != -1) {
      return true
    } else {
      return event.preventDefault();
    }
  }

}