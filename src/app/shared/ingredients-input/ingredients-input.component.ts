import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IIngredient } from '../interfaces/ingredients';

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

  ingredientData: IIngredient = {
    ingredient: '',
    quantity: 0,
    measurement: '',
    index: 0
  };

  constructor() {

  }

  handleIngredientsChange(ingredientsData: any) {   
    if (ingredientsData.name === 'mealIngredients') {      
      this.ingredientData.ingredient = ingredientsData.value;
    } else if (ingredientsData.name === 'ingredientsQuantity') {
      this.ingredientData.quantity = ingredientsData.value;
    } else if (ingredientsData.ngControl.name === 'ingredientsMeasurement') {
      this.ingredientData.measurement = ingredientsData.value;
    }

    this.ingredientData.index = this.dataIndex;

    this.setRecipeIngredients.emit(this.ingredientData);

  }

}
