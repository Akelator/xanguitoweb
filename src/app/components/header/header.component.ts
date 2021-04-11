import { Component, ElementRef, Input, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() set scroll(value: number) {
    this.move(value);
  }
  private initPos: number = 460;
  constructor(private el: ElementRef, private render: Renderer2) {}
  private move(value: number) {
    this.render.setStyle(
      this.el.nativeElement,
      'top',
      `${-(this.initPos + value / 1.6)}px`
    );
  }
}
