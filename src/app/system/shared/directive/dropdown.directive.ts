import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[upDownDirective]'

})

export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') onClick():void {
    this.isOpen = !this.isOpen;
 }
}
