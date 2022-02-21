import { Directive, ElementRef, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]'
})
export class HoverAffectDirective implements OnInit {
@Input () decoration?: string;
  constructor(private elm: ElementRef) { 
  }
  ngOnInit(): void{
  }

  @HostListener("hover") onHover(btn:any){
    this.highlightMe(this.decoration);
  }

  private highlightMe(decoration?: string){
    this.elm.nativeElement.style.decoration = decoration ?? "underline"
  }
}
