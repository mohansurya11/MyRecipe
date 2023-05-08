import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private el:ElementRef) { }
    @HostListener('mouseenter') onMouseEnter(){
      this.highlight("LightSlateGray");
    }

    @HostListener('mouseleave') onMouseLeave(){
      this.highlight("");
    }

    private highlight(color:string){
      this.el.nativeElement.style.color=color;
    }
  }


