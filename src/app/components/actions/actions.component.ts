import { Component } from '@angular/core';

@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss'],
})
export class ActionsComponent {
  private links = {
    steam: 'https://store.steampowered.com/app/1547730/Xanguito_Aventura',
    twitter:
      'https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fpublish.twitter.com%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=XanguitoA&tw_p=followbutton',
    youtube: 'https://www.youtube.com/channel/UC4q6xUkq37sfFe8YNfDvD0Q',
    facebook: 'https://www.facebook.com/XanguitoAventura/',
    instagram: 'https://www.instagram.com/xanguitoaventura',
  };

  clickAction(action: string): void {
    switch (action) {
      case 'steam':
        window.open(this.links.steam, '_blank');
        break;
      case 'twitter':
        window.open(this.links.twitter, '_blank');
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
