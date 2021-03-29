import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LangService {
  langs = ['en', 'es', 'ca'];
  private selectedIndex = 0;
  constructor() {
    this.setInitialLang();
  }

  get selectedLang(): string {
    return this.langs[this.selectedIndex];
  }

  changeLang(): void {
    this.selectedIndex = this.selectedIndex == 2 ? 0 : this.selectedIndex + 1;
    localStorage.setItem('user-lang', this.langs[this.selectedIndex]);
  }

  private setInitialLang() {
    const userLang = localStorage.getItem('user-lang');
    if (!userLang) {
      const navigatorLang = navigator.language;
      if (this.langs.includes(navigatorLang)) {
        this.selectedIndex = this.langs.indexOf(navigatorLang);
      } else {
        this.selectedIndex = 0;
      }
    } else {
      this.selectedIndex = this.langs.indexOf(userLang);
    }
    localStorage.setItem('user-lang', this.langs[this.selectedIndex]);
  }
}
