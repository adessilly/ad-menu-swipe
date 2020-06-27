# AD Menu Swipe
[website](https://adessilly.github.io/ad-menu-swipe/)

Swipe a component to the left or to the right to select actions behinds.

<iframe src="https://stackblitz.com/edit/ad-library?embed=1&file=src/app/app.component.html&hideExplorer=1&hideNavigation=1&view=preview" style="width:100%;height:330px;border:none;"></iframe>

## Using ***ad-menu-swipe*** in a project

1. Install the library and hammerjs : 
`npm i hammerjs ad-menu-swipe`
2. Import the module : 
```
import { AdMenuSwipeModule } from 'ad-menu-swipe';
@NgModule({
imports: [ ..., AdMenuSwipeModule ], ...
```

```
    <ad-menu-swipe
      (actionSwiped)="actionSwiped($event)"
      [actionsLeft]="actionsLeft"
      [actionsRight]="actionsRight">
      <!-- HTML here -->
    </ad-menu-swipe>
```

## Component

- `ad-menu-swipe` - (`MenuSwipeComponent`)

### Properties

Parameters supported by this object:

- `actionsLeft`: SwipeAction[]; - Array of icons actions to put to the left
- `actionsRight`: SwipeAction[]; - Array of icons actions to put to the right
- `disabled`: boolean (default: false) - disable swip and tap

### Events

- `actionSwiped`: SwipeAction; - the action swiped
- `menuTap`: void; - event when tap on the menu (to use instead of click)
- `swipeStart`: void; - event triggered when swipe starts
- `swipeEnd`: void; - event triggered when swipe ends

## Example

<iframe src="https://stackblitz.com/edit/menu-swipe?file=src%2Fapp%2Fapp.component.html&hideNavigation=1&view=preview" style="width:100%;height:400px;border:none;"></iframe>

## Test library

clone this project and run 'npm i && npm start'

## License

MIT License

## Author
Adrien Dessilly
