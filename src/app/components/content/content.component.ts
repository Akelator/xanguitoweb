import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';

import { translations } from '../../shared/translations/translations';
import { LangService } from './../lang/lang.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  translations = translations;

  @Output() openDemo = new EventEmitter<null>();
  @Output() openScreenshot = new EventEmitter<number>();
  @Output() scroll = new EventEmitter<number>();
  constructor(
    private langService: LangService,
    private render: Renderer2,
    private el: ElementRef
  ) {}
  ngOnInit() {
    this.render.listen(this.el.nativeElement, 'scroll', () => {
      this.scroll.emit(this.el.nativeElement.scrollTop);
    });
  }
  onOpenDemo(): void {
    this.openDemo.emit();
  }
  onOpenScreeshot(index: number) {
    this.openScreenshot.emit(index);
  }
  get description(): string {
    return this.translations[this.lang].description;
  }

  get demoBtn(): string {
    return this.translations[this.lang].demoBtn;
  }

  get lang(): string {
    return this.langService.selectedLang;
  }
}
