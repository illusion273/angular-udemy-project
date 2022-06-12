import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
  exportAs: "appDropDown"
})
export class DropdownDirective {
  @HostBinding('class.show') visible: boolean = false;
  @HostListener('click') onDropdownToggle() {
    this.visible = !this.visible;
  }
}
