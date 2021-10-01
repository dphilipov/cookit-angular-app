import { Component, OnInit } from '@angular/core';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { ActivatedRoute } from '@angular/router';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  fetchedMeals = [];
  shoppingListIngredients: Array<any> = [];
  loggedIn: boolean = false;
  searchTerm: string = '';
  searchedRecipes: IRecipe[] = [];

  constructor(private fetchServices: FetchServicesService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      this.searchTerm = params.searchTerm + '*'; // allows for partial search in the DB

      if (params.searchTerm) {
        this.fetchServices.getAll(undefined, this.searchTerm) // searches all text fields in across the collection
          .then((res: any) => {
            const searchTermWithoutWildcard = this.searchTerm.slice(0, this.searchTerm.length - 1)
            const filteredByName = res.documents.filter((x: any) => x.name.toLowerCase().includes(searchTermWithoutWildcard.toLowerCase()))
            
            this.fetchedMeals = filteredByName;
          });
      } else {
        this.fetchServices.getAll()
          .then((res: any) => {
            this.fetchedMeals = res.documents;
          });
      }
    })



    localStorage.getItem('user') ? this.loggedIn = true : this.loggedIn = false;
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
      if (this.shoppingListIngredients.find((x: any) => x.ingredient === item.ingredient)) {
        let existingItem: any = this.shoppingListIngredients.find((x: any) => x.ingredient === item.ingredient);
        let newItem = existingItem.quantity += Number(item.quantity);
      } else {
        this.shoppingListIngredients.push({ ingredient: item.ingredient, quantity: Number(item.quantity), measurement: item.measurement })
      }
    })
  }

  removeAllHandler(): void {
    localStorage.removeItem('cachedShoppingList');
    this.shoppingListIngredients = [];
  }

  removeFromShoppingListHandler(ingredient: any) {
    this.shoppingListIngredients = this.shoppingListIngredients.filter(x => x.ingredient !== ingredient);

    if (this.shoppingListIngredients.length === 0) {
      localStorage.removeItem('cachedShoppingList');
    }
  }
}
