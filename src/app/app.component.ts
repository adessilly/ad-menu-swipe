import { Component, VERSION } from '@angular/core';
import { SwipeAction } from 'projects/ad-menu-swipe/src/lib/shared/models/swipe-action';
import { FakeData } from './fake-data';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  actionsLeft = [ { icon: 'fa-solid fa-archive' }, { icon: 'fa-solid fa-trash' }, { icon: 'fa-solid fa-star' } ];
  actionsRight = [ { icon: 'fa-solid fa-reply-all' }, { icon: 'fa-solid fa-reply' } ];

  mails = FakeData.mails;

  lastSwipeAction!: SwipeAction;
  lastSwipeIndex!: number;

  actionSwiped(action: SwipeAction, index: number) {
    this.lastSwipeAction = action;
    this.lastSwipeIndex = index;
  }

  menuTap() {
    console.log('click');
  }

}
