import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgParticlesModule } from 'ng-particles';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ContentComponent } from './components/content/content.component';
import { WindowComponent } from './components/window/window.component';
import { HeaderComponent } from './components/header/header.component';
import { LangComponent } from './components/lang/lang.component';
import { ParticlesComponent } from './components/particles/particles.component';
import { ScreenshootsComponent } from './components/screenshoots/screenshoots.component';
import { TitleComponent } from './components/title/title.component';
import { YoutubeComponent } from './components/youtube/youtube.component';

const appComponents = [
  TitleComponent,
  HeaderComponent,
  YoutubeComponent,
  ContentComponent,
  ActionsComponent,
  WindowComponent,
  LangComponent,
  ParticlesComponent,
  ScreenshootsComponent,
];
@NgModule({
  declarations: [AppComponent, ...appComponents],
  imports: [BrowserModule, AppRoutingModule, NgParticlesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
