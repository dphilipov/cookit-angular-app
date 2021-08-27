import { Component, OnInit } from '@angular/core';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userEmail!: string;
  fetchedMeals!: Array<IRecipe>;
  shoppingListIngredients: Array<any> = [];

  constructor(private authService: AuthServicesService, private fetchService: FetchServicesService) { 

  }

  ngOnInit(): void {
    this.authService.getUser()
      .then((res: any) => {        
        this.userEmail = res.email 
        
        this.fetchService.getAll([`createdBy=${res.$id}`])
          .then((fetchedRecipes: any) => {
            this.fetchedMeals = fetchedRecipes.documents;
            console.log(this.fetchedMeals);
            
          })
      })
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
