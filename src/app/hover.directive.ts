import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})

export class HoverDirective{
  @HostBinding('class.hover') isHover:boolean = false;

  constructor() { }

  @HostListener('mouseenter') mouseEnterEvent(eventData:Event){
    this.isHover = true;
  }

  @HostListener('mouseleave') mouseLeaveEvent(eventData:Event){
    this.isHover = false;
  }

}
