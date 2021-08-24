import { Component, OnInit } from '@angular/core';
import { FetchServicesService } from 'src/app/services/fetch-services.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  fetchedMeals = [];
  shoppingListIngredients: Array<any> = [];

  constructor(private fetchServices: FetchServicesService) {

  }

  ngOnInit(): void {
    this.fetchServices.getAll()
      .then((res: any) => {
        this.fetchedMeals = res.documents;
      });
  }

  ngDoCheck(): void {
    if (this.shoppingListIngredients.length > 0) {
      localStorage.setItem('cachedShoppingList', JSON.stringify(this.shoppingListIngredients));
    } else if (this.shoppingListIngredients.length === 0 && localStorage.getItem('cachedShoppingList')) {
      const cache: any = localStorage.getItem('cachedShoppingList')
      this.shoppingListIngredients = JSON.parse(cache);
    }
  }

  addToShoppingListHandler(ingredients: any): void {

    ingredients.forEach((item: any) => {

      // if (this.shoppingListIngredients.length === 0) {
      //   this.shoppingListIngredients.push({ ingredient: item.ingredient, quantity: Number(item.quantity), measurement: item.measurement })

      //   console.log(this.shoppingListIngredients);

      // } else if (this.shoppingListIngredients.find((x: any) => x.ingredient === item.ingredient)) {
      //   let existingItem = this.shoppingListIngredients.find((x: any) => x.ingredient === item.ingredient);

      //   console.log(existingItem);

      // }

      if (this.shoppingListIngredients.find((x: any) => x.ingredient === item.ingredient)) {
        let existingItem: any = this.shoppingListIngredients.find((x: any) => x.ingredient === item.ingredient);
        let newItem = existingItem.quantity += Number(item.quantity);

        console.log(newItem);

      } else {
        this.shoppingListIngredients.push({ ingredient: item.ingredient, quantity: Number(item.quantity), measurement: item.measurement })

        console.log(this.shoppingListIngredients);

      }



    })

  }

  removeAllHandler(): void {
    localStorage.removeItem('cachedShoppingList');
    this.shoppingListIngredients = [];
}

}
