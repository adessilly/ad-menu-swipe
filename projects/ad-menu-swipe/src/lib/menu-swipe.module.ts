import { NgModule } from '@angular/core';
import { MenuSwipeComponent } from './menu-swipe.component';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import { MenuSwipeGestureConfig } from './menu-swipe-gesture-config.service';
import { CommonModule } from '@angular/common';
import { MenuSwipeActionBarComponent } from './menu-swipe-action-bar/menu-swipe-action-bar.component';



@NgModule({
  declarations: [MenuSwipeComponent, MenuSwipeActionBarComponent],
  imports: [
    CommonModule, HammerModule
  ],
  exports: [MenuSwipeComponent, MenuSwipeActionBarComponent],
  providers: [{
    provide: HAMMER_GESTURE_CONFIG,
    useClass: MenuSwipeGestureConfig ,
  }]
})
export class AdMenuSwipeModule { }
