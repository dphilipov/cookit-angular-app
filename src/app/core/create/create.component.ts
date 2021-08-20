import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  files: File[] = [];
  recipe: IRecipe = {
    name: '',
    description: '',
    directions: '',
    imageId: ''
  }
  recipeImage: any;

  constructor(private fetchServices: FetchServicesService, private router: Router) {

  }

  ngOnInit(): void {
  }

  onSelect(event: any) {
    this.recipeImage = event.addedFiles[0];
    this.files = [];
    this.files.push(this.recipeImage);

  }

  submitRecipeHandler(form: any): void {
    this.recipe.name = form.form.controls.recipeName.value;
    this.recipe.description = form.form.controls.recipeDescription.value;
    this.recipe.directions = form.form.controls.recipeDirections.value;

    console.log(this.recipe, this.recipeImage);

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
        console.log(uploadRes);
        
      })
      .catch((err) => {
        console.log(err);
      });

  }
}
