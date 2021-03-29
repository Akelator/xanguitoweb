import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DemoComponent {
  @Input() isOpen = false;
  @Output() closeDemo = new EventEmitter<null>();
  @Output() enableBlur = new EventEmitter<boolean>();
  private demoUrl = 'http://www.xanguitoaventura.com/demo/';
  constructor(private sanitizer: DomSanitizer) {}
  getDemoIframe() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.demoUrl);
  }
  onCloseDemo() {
    this.closeDemo.emit();
  }
}
