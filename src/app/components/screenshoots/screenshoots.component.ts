import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-screenshoots',
  templateUrl: './screenshoots.component.html',
  styleUrls: ['./screenshoots.component.scss'],
})
export class ScreenshootsComponent {
  screenshots = [0, 1, 2, 3, 4, 5];
  @Output() openScreenshot = new EventEmitter<any>();
  onOpenScreenShot(index: number): void {
    this.openScreenshot.emit(index);
  }
}
