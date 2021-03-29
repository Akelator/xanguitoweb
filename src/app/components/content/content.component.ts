import { Component, EventEmitter, Output } from '@angular/core';

import { translations } from '../../shared/translations/translations';
import { LangService } from './../lang/lang.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  translations = translations;

  @Output() openDemo = new EventEmitter<null>();
  constructor(private langService: LangService) {}
  onOpenDemo(): void {
    this.openDemo.emit();
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
