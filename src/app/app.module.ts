import { LandingPageComponent } from './modules/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ChatWindowOneComponent } from './modules/chat-window-one/chat-window-one.component';
import { ChatWindowTwoComponent } from './modules/chat-window-two/chat-window-two.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, LandingPageComponent, ChatWindowOneComponent, ChatWindowTwoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
