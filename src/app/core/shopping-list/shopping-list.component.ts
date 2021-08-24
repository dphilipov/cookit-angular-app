import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {
  @Input() shoppingListIngredients: Array<any> = [];
  @Output() removeAllHandler: EventEmitter<any> = new EventEmitter();

  constructor() { 

  }

  emitRemoveAll(event: any): void {
    console.log(event);
    
    this.removeAllHandler.emit('emit');
  }

}
