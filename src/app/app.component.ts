import { Component, VERSION } from '@angular/core';
import { SwipeAction } from 'projects/ad-menu-swipe/src/lib/shared/models/swipe-action';
import { FakeData } from './fake-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  actionsLeft = [ { icon: 'fas fa-archive' }, { icon: 'fas fa-trash' }, { icon: 'fas fa-star' } ];
  actionsRight = [ { icon: 'fas fa-reply-all' }, { icon: 'fas fa-reply' } ];

  mails = FakeData.mails;

  lastSwipeAction: SwipeAction;
  lastSwipeIndex: number;

  actionSwiped(action: SwipeAction, index: number) {
    this.lastSwipeAction = action;
    this.lastSwipeIndex = index;
  }

}
