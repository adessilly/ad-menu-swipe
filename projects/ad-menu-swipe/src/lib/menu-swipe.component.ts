import { Component, OnInit, ViewChildren, QueryList, ElementRef, ViewChild, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SwipeAction } from './shared/models/swipe-action';

@Component({
  selector: 'ad-menu-swipe',
  templateUrl: './menu-swipe.component.html',
  styleUrls: ['./menu-swipe.component.scss']
})
export class MenuSwipeComponent implements OnInit {

  deltaX = 0;
  borderRadius = 0;
  panMoving = false;
  actionActive = false;
  selectedAnimatingLeft = false;
  selectedAnimatingRight = false;

  @Input() actionsLeft: SwipeAction[] = [];
  @Input() actionsRight: SwipeAction[] = [];
  @Input() disabled = false;
  @Output() actionSwiped: EventEmitter<SwipeAction> = new EventEmitter<SwipeAction>();
  @Output() menuTap: EventEmitter<any> = new EventEmitter<any>();

  @Output() swipeStart: EventEmitter<any> = new EventEmitter<any>();
  @Output() swipeEnd: EventEmitter<any> = new EventEmitter<any>();

  stateActionsLeft = [];
  stateActionsRight = [];

  currentAction: SwipeAction | null = null;

  constructor() { }

  ngOnInit() {
  }

  askSelected(action: SwipeAction) {
    this.currentAction = action;
  }

  askPan(event: any) {

    if (!this.panMoving || event.overallVelocity > 4  || event.overallVelocity < -4) {
      return;
    }

    this.deltaX = event.deltaX;
    this.borderRadius = Math.abs(this.deltaX) / 4;
    if (this.borderRadius > 9) {
      this.borderRadius = 9;
    }

  }

  // Fix because issues with HammerJS and Scrolling.
  // If we set only a Pan direction of Horizontal,
  // it will not be possible to use vertical scrolling,
  // si we have to enable directionAll and handle the horizontal pan
  // manually
  isScrolling(event: any) {
    // if vertical pan or if velocity very high :
    // it means it is a scrolling move
    return (event.direction !== 2 && event.direction !== 4)
    || event.overallVelocity > 4
    || event.overallVelocity < -4;
  }

  askTap(event: any) {
    if (this.disabled) {
      return;
    }
    this.menuTap.emit();
  }

  askPanStart(event: any) {
    if (this.disabled) {
      return;
    }
    // Only enable pan if it is an horizontal direction
    // Because vertical direction means it is a scrolling move.
    this.panMoving = !this.isScrolling(event);
    if (this.panMoving) {
      this.currentAction = null;
      this.swipeStart.emit();
    }
  }

  askPanEnd(event: any) {
    this.panMoving = false;
    this.swipeEnd.emit();
    this.deltaX = 0;

    if (this.hasSelectedSomethingLeft() && this.currentAction) {
      this.selectedAnimatingLeft = true;
      this.actionSwiped.emit(this.currentAction);
      setTimeout(() => {
        this.selectedAnimatingLeft = false;
      }, 1000);
    }

    if (this.hasSelectedSomethingRight() && this.currentAction) {
      this.selectedAnimatingRight = true;
      this.actionSwiped.emit(this.currentAction);
      setTimeout(() => {
        this.selectedAnimatingRight = false;
      }, 1000);
    }

    this.borderRadius = 0;
    this.actionActive = false;
  }

  hasSelectedSomethingLeft() {
    return this.actionsLeft.some(elem => elem === this.currentAction);
  }

  hasSelectedSomethingRight() {
    return this.actionsRight.some(elem => elem === this.currentAction);
  }

}
