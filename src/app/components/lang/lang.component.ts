import { LangService } from './lang.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss'],
})
export class LangComponent implements OnInit {
  constructor(private langService: LangService) {}

  ngOnInit(): void {}

  onChangeLang(): void {
    this.langService.changeLang();
  }

  get selected(): string {
    return this.langService.selectedLang;
  }
}
