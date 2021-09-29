import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from 'src/app/services/auth-services.service';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { IError } from 'src/app/shared/interfaces/error';
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
    name: '',
    description: '',
    ingredients: [],
    directions: '',
    imageId: '',
    createdBy: '',
  }
  recipeImage: any;
  recipeIngredientsLength = [
    {
      ingredient: '',
      quantity: 0,
      measurement: ''
    }
  ];
  recipeIngredients = [
    {
      ingredient: '',
      quantity: 0,
      measurement: ''
    }
  ];
  error!: IError | null;

  constructor(private fetchServices: FetchServicesService, private router: Router, private authService: AuthServicesService) {

  }

  setRecipeIngredients(event: IIngredient): void {
    const { ingredient, quantity, measurement } = event;
    this.recipeIngredients[event.index] = { ingredient, quantity, measurement };
  }

  onSelect(event: any): void {
    this.recipeImage = event.addedFiles[0];
    this.files = [];
    this.files.push(this.recipeImage);
  }

  addIngredientsFieldHandler(event: MouseEvent): void {
    event.preventDefault();

    this.recipeIngredientsLength.push({
      ingredient: '',
      quantity: 0,
      measurement: ''
    });
    this.recipeIngredients.push({
      ingredient: '',
      quantity: 0,
      measurement: ''
    });
  }

  submitRecipeHandler(form: any): void {
    this.recipe.name = form.form.controls.recipeName.value.trim();
    this.recipe.description = form.form.controls.recipeDescription.value.trim();
    this.recipe.ingredients = this.recipeIngredients;
    this.recipe.directions = form.form.controls.recipeDirections.value.trim();

    if (this.recipe.name == '' || this.recipe.description == '' || this.recipe.directions == '') {
      this.error = {
        type: 'bad',
        message: 'You must enter a value!'
      }

      return;
    } else if (this.files.length == 0) {
      this.error = {
        type: 'bad',
        message: 'You must upload an image!'
      }

      return;
    } else if (this.recipe.ingredients) {

      let check: boolean = true;

      for (let i = 0; i < this.recipe.ingredients.length; i++) {
        if (this.recipe.ingredients[i].ingredient == '' || this.recipe.ingredients[i].measurement == '') {
          this.error = {
            type: 'bad',
            message: 'You must enter a value!'
          }

          check = false;
        } else if (this.recipe.ingredients[i].quantity <= 0) {
          this.error = {
            type: 'bad',
            message: 'Quantity must be a valid number!'
          }

          check = false;
        } else {
          check = true;
        }

        if (!check) {
          return;
        }
      }

      if (!check) {
        return;
      }

    } else {
      this.error = null;
    }

    this.fetchServices.uploadImage(this.recipeImage)
      .then((uploadRes: any) => {
        this.recipe.imageId = uploadRes.$id;

        this.authService.getUser()
          .then((currentUser: any) => {
            this.recipe.createdBy = currentUser.$id;
          })
          .then(res => {
            this.fetchServices.createOne(this.recipe)
              .then((createRes) => {
                this.router.navigate(["/"])
              })
              .catch((err) => {
                console.log(err);
              });
          })
      })
      .catch((err) => {
        console.log(err);
      });
  }

}
