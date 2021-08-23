import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchServicesService } from 'src/app/services/fetch-services.service';
import { IRecipe } from 'src/app/shared/interfaces/recipe';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  recipe?: IRecipe;
  ingredients?: [
    {
      ingredient: string,
      measurement: string,
      quantity: number
    }
  ];
  imagePreview: URL | undefined;

  constructor(private fetchServices: FetchServicesService, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    let recipeId: string = <string>this.activatedRoute.snapshot.paramMap.get('id');

    this.fetchServices.getOne(recipeId)
      .then((fetchedRecipe: any) => {
        this.recipe = fetchedRecipe;
        this.ingredients = fetchedRecipe.ingredients;
        this.imagePreview = this.fetchServices.previewImage(fetchedRecipe.imageId);
      })
  }

}
