import { HammerGestureConfig, HammerLoader } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuSwipeGestureConfig extends HammerGestureConfig {


  overrides = {
    pan: { direction: Hammer.DIRECTION_ALL }
  };



  /*
  buildHammer(element: HTMLElement) {
    return new Hammer.Manager(element, {
    touchAction: 'pan-x',
    recognizers: [
        [Hammer.Pan,{ direction: Hammer.DIRECTION_HORIZONTAL }],
    ]
    });
  }
  */

}
