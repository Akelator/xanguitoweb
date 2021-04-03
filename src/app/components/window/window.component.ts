import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WindowComponent {
  @Input() isOpen = false;
  @Output() closeWindow = new EventEmitter<null>();
  @Output() enableBlur = new EventEmitter<boolean>();
  _screenshot: any;
  private demoUrl = 'http://www.xanguitoaventura.com/demo/';
  constructor(private sanitizer: DomSanitizer) {}
  getDemoIframe(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.demoUrl);
  }
  onCloseWindow(): void {
    this.closeWindow.emit();
    setTimeout(() => {
      this._screenshot = undefined;
    }, 120);
  }
  set screenshot(value: any) {
    this._screenshot = value;
  }
  get validScreenshot(): boolean {
    return this._screenshot !== undefined && this._screenshot !== null;
  }
}
