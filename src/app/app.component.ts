import { Component, ViewChild } from '@angular/core';
import { WindowComponent } from './components/window/window.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('window') window?: WindowComponent;
  windowIsOpen = false;
  onOpenScreenshot(index: any): void {
    if (this.window) {
      this.window.screenshot = index;
    }
    this.windowIsOpen = true;
  }
}
