import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionsComponent } from './components/actions/actions.component';
import { ContentComponent } from './components/content/content.component';
import { DemoComponent } from './components/demo/demo.component';
import { HeaderComponent } from './components/header/header.component';
import { TitleComponent } from './components/title/title.component';
import { YoutubeComponent } from './components/youtube/youtube.component';
import { LangComponent } from './components/lang/lang.component';

const appComponents = [
  TitleComponent,
  HeaderComponent,
  YoutubeComponent,
  ContentComponent,
  ActionsComponent,
  DemoComponent,
  LangComponent,
];
@NgModule({
  declarations: [AppComponent, ...appComponents],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
