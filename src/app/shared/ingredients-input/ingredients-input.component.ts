import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredients-input',
  templateUrl: './ingredients-input.component.html',
  styleUrls: ['./ingredients-input.component.css']
})
export class IngredientsInputComponent {
  @Input() options = [
    {
      value: "kg",
      label: "kg"
    },
    {
      value: "g",
      label: "g"
    },
    {
      value: "mg",
      label: "mg"
    },
    {
      value: "l",
      label: "l"
    },
    {
      value: "ml",
      label: "ml"
    },
    {
      value: "pcs",
      label: "pcs"
    },
  ]
  @Input() recipeIngredient!: any;
  @Input() dataIndex!: number;
  @Output() setRecipeIngredients: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  handleIngredientsChange(ingredientsData: any) {
       
    if (ingredientsData.name === 'mealIngredients') {      
      this.recipeIngredient.ingredient = ingredientsData.value;
    } else if (ingredientsData.name === 'ingredientsQuantity') {
      this.recipeIngredient.quantity = ingredientsData.value;
    } else if (ingredientsData.ngControl.name === 'ingredientsMeasurement') {
      this.recipeIngredient.measurement = ingredientsData.value;
    }

    this.recipeIngredient.index = this.dataIndex;

    this.setRecipeIngredients.emit(this.recipeIngredient);

  }

}
