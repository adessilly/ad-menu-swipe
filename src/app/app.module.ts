import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AdMenuSwipeModule } from 'projects/ad-menu-swipe/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AdMenuSwipeModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
