import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { IError } from 'src/app/shared/interfaces/error';
import { IIngredient } from 'src/app/shared/interfaces/ingredients';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  files: File[] = [];
  recipe: IRecipe = {
    name: '',
    description: '',
    ingredients: [],
    directions: '',
    imageId: '',
    createdBy: ''
  }
  imagePreview!: string | null;
  recipeIngredientsLength: Object[] = [];
  recipeIngredients: any = [];
  error!: IError | null;


  constructor(private fetchServices: FetchServicesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let recipeId: string = <string>this.activatedRoute.snapshot.paramMap.get('id');

    this.fetchServices.getOne(recipeId)
      .then((fetchedRecipe: any) => {
        this.recipe = fetchedRecipe;

        this.recipeIngredientsLength = this.recipe.ingredients;
        this.recipeIngredients = this.recipe.ingredients;

        this.imagePreview = this.fetchServices.previewImage(fetchedRecipe.imageId, 50).href;
      })

  }

  setRecipeIngredients(event: IIngredient): void {
    const { ingredient, quantity, measurement } = event;
    this.recipeIngredients[event.index] = { ingredient, quantity, measurement };
  }

  deleteRecipeIngredient(indexToDelete: number): void {
    this.recipeIngredients.splice(indexToDelete, 1);
    this.recipeIngredientsLength.splice(indexToDelete, 1);
  }

  setRecipeImage(recipeImage: any): void {
    this.files = recipeImage;
  }

  hideElementHandler() {
    this.imagePreview = null;
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

  updateRecipeHandler(form: any): void {

    this.recipe.name = form.form.controls.recipeName.value.trim();
    this.recipe.description = form.form.controls.recipeDescription.value.trim();
    this.recipe.directions = form.form.controls.recipeDirections.value.trim();

    if (this.recipeIngredientsLength.length === 0) {
      this.error = {
        type: 'bad',
        message: 'You must add at least 1 ingredient!'
      }

      return;
    }

    if (this.recipe.name == '' || this.recipe.description == '' || this.recipe.directions == '') {
      this.error = {
        type: 'bad',
        message: 'You must enter a value!'
      }

      return;
    } else if (this.files.length == 0 && this.imagePreview == null) {
      this.error = {
        type: 'bad',
        message: 'You must upload an image!'
      }

      return;
    } else if (this.recipe.ingredients) {

      let check: boolean = false;

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

    if (this.files.length != 0) {
      this.fetchServices.uploadImage(this.files[0])
        .then((uploadRes: any) => {
          this.recipe.imageId = uploadRes.$id;
          let recipeId: string = <string>this.activatedRoute.snapshot.paramMap.get('id');

          this.fetchServices.updateOne(recipeId, this.recipe)
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
    } else if (this.imagePreview != null) {
      let recipeId: string = <string>this.activatedRoute.snapshot.paramMap.get('id');

      this.fetchServices.updateOne(recipeId, this.recipe)
        .then((createRes) => {
          this.router.navigate(["/"])
        })
        .catch((err) => {
          console.log(err);
        });
    }


  }

}
