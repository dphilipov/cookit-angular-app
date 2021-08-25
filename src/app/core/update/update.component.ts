import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
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
    $id: '',
    name: '',
    description: '',
    ingredients: [],
    directions: '',
    imageId: ''
  }
  recipeImage: any;
  recipeIngredientsLength: Object[] = [];
  recipeIngredients: any = [];

  constructor(private fetchServices: FetchServicesService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    let recipeId: string = <string>this.activatedRoute.snapshot.paramMap.get('id');

    this.fetchServices.getOne(recipeId)
      .then((fetchedRecipe: any) => {
        this.recipe = fetchedRecipe;
        this.recipe.ingredients.forEach((ingredient) => {
          this.recipeIngredientsLength.push(ingredient);
        });
        this.recipeIngredients = this.recipe.ingredients;
      })



  }

  setRecipeIngredients(event: IIngredient): void {
    const { ingredient, quantity, measurement } = event;
    this.recipeIngredients[event.index] = { ingredient, quantity, measurement };
  }

  onSelect(event: any): void {
    this.recipeImage = event.addedFiles[0];
    this.files = [];
    this.files.push(this.recipeImage);
    console.log(this.recipeImage);

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
    this.recipe.name !== form.form.controls.recipeName.value ? this.recipe.name = form.form.controls.recipeName.value : null;
    this.recipe.description !== form.form.controls.recipeDescription.value ? this.recipe.description = form.form.controls.recipeDescription.value : null;
    this.recipe.directions !== form.form.controls.recipeDirections.value ? this.recipe.directions = form.form.controls.recipeDirections.value : null;
    
    this.fetchServices.uploadImage(this.recipeImage)
      .then((uploadRes: any) => {
        this.recipe.imageId = uploadRes.$id;
      
        this.fetchServices.updateOne(this.recipe.$id, this.recipe)
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
