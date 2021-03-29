import { Component } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  private links = {
    steam: 'https://store.steampowered.com/app/1547730/Xanguito_Aventura',
    youtube: 'https://www.youtube.com/channel/UC4q6xUkq37sfFe8YNfDvD0Q',
    facebook: 'https://www.facebook.com/XanguitoAventura/',
    instagram: 'https://www.instagram.com/xanguitoaventura',
  };
  clickAction(action: string): void {
    switch (action) {
      case 'steam':
        window.open(this.links.steam, '_blank');
        break;
      case 'youtube':
        window.open(this.links.youtube, '_blank');
        break;
      case 'facebook':
        window.open(this.links.facebook, '_blank');
        break;
      case 'instagram':
        window.open(this.links.instagram, '_blank');
        break;
    }
  }
}
