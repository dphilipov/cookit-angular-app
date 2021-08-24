import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input() shoppingListIngredients: Array<any> = [];

  constructor() { 

  }

}
