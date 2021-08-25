import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { IIngredient } from 'src/app/shared/interfaces/ingredients';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  files: File[] = [];
  recipe: IRecipe = {
    $id: '',
    name: '',
    description: '',
    ingredients: [],
    directions: '',
    imageId: ''
  }
  recipeImage: any;
  recipeIngredientsLength = [{}];
  recipeIngredients = [
    {
      ingredient: '',
      quantity: 0,
      measurement: ''
    }
  ];

  constructor(private fetchServices: FetchServicesService, private router: Router) {

  }

  setRecipeIngredients(event: IIngredient): void {
    const {ingredient, quantity, measurement} = event;
    this.recipeIngredients[event.index] = {ingredient, quantity, measurement};
  }

  onSelect(event: any): void {
    this.recipeImage = event.addedFiles[0];
    this.files = [];
    this.files.push(this.recipeImage);
  }

  addIngredientsFieldHandler(event: MouseEvent): void {
    event.preventDefault();

    this.recipeIngredientsLength.push({});
    this.recipeIngredients.push({
      ingredient: '',
      quantity: 0,
      measurement: ''
    });
  }

  submitRecipeHandler(form: any): void {
    this.recipe.name = form.form.controls.recipeName.value;
    this.recipe.description = form.form.controls.recipeDescription.value;
    this.recipe.ingredients = this.recipeIngredients;
    this.recipe.directions = form.form.controls.recipeDirections.value;

    this.fetchServices.uploadImage(this.recipeImage)
      .then((uploadRes: any) => {
        this.recipe.imageId = uploadRes.$id;
        this.fetchServices.createOne(this.recipe)
          .then((createRes) => {
            this.router.navigate(["/"])
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });

  }
}
