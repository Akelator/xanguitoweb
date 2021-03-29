import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit {
  playerFrame = 1;
  private frame = 100;
  constructor() {}

  ngOnInit(): void {
    this.animatePlayer();
  }

  private animatePlayer() {
    setInterval(() => {
      this.playerFrame = this.playerFrame === 6 ? 1 : this.playerFrame + 1;
    }, this.frame);
  }

  get imgSource(): string {
    return `player_${this.playerFrame}`;
  }
}
