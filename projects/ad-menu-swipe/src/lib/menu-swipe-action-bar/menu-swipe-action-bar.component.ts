import {
  Component, Input, ElementRef,
  QueryList, ViewChildren, ViewChild, OnChanges,
  SimpleChanges,
  AfterViewInit,
  ChangeDetectorRef,
  Output,
  EventEmitter} from '@angular/core';

@Component({
  selector: 'ad-menu-swipe-action-bar',
  templateUrl: './menu-swipe-action-bar.component.html',
  styleUrls: ['./menu-swipe-action-bar.component.scss']
})
export class MenuSwipeActionBarComponent implements AfterViewInit, OnChanges {

  @Input() actions: any;
  @Input() deltaX = 0;
  @Input() alignRight = false;
  @Input() animating = false;

  @Output() selected: EventEmitter<any> = new EventEmitter();

  @ViewChild('actionsZone') actionsZone!: ElementRef;
  @ViewChildren('actionsViews') actionsViews!: QueryList<ElementRef>;

  activeAction = null;

  viewLoaded = false;

  constructor() { }

  ngAfterViewInit() {
    this.viewLoaded = true;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (this.viewLoaded && (changes['actions'] || changes['deltaX']) ) {
      this.checkSelectedAction();
    }
  }

  checkSelectedAction() {
    if (this.actions === null || this.animating) {
      return;
    }
    if (this.alignRight && this.deltaX < 0) {
      this.checkSelectedActionRight();
    } else {
      this.checkSelectedActionLeft();
    }
  }

  checkSelectedActionLeft() {

    const oldActiveAction = this.activeAction;
    this.activeAction = null;

    const views = this.actionsViews.toArray();
    const actions = this.actions;
    for (let index = views.length - 1; index >= 0; index--) {
      const action = actions[index];
      const view = views[index];
      const activationLimit = view.nativeElement.offsetWidth + view.nativeElement.offsetLeft;
      const isActive = this.deltaX > activationLimit;
      if (isActive) {
        this.activeAction = action;
        break;
      }
    }
    if (this.activeAction !== oldActiveAction) {
      this.selected.emit(this.activeAction);
    }
  }

  checkSelectedActionRight() {

    const oldActiveAction = this.activeAction;
    this.activeAction = null;

    const deltaXAbs = Math.abs( this.deltaX );
    const views = this.actionsViews.toArray();
    const actions = this.actions;
    for (let index = 0; index < views.length; index++) {
      const action = actions[index];
      const view = views[index];
      const activationLimit = view.nativeElement.offsetLeft;
      const isActive = this.actionsZone.nativeElement.offsetWidth - deltaXAbs < activationLimit;
      if (isActive) {
        this.activeAction = action;
        if (action !== oldActiveAction) {
          this.selected.emit(action);
        }
        break;
      }
    }
    if (this.activeAction !== oldActiveAction) {
      this.selected.emit(this.activeAction);
    }
  }

}
