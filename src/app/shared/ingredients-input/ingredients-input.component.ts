import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ingredients-input',
  templateUrl: './ingredients-input.component.html',
  styleUrls: ['./ingredients-input.component.css']
})
export class IngredientsInputComponent {
  @Input() options = [
    "kg",
    "g",
    "mg",
    "l",
    "ml",
    "pcs",
    "tsp",
    "tbsp",
    "cup",
    "pinch",
    "pack"
  ]

  @Input() recipeIngredient!: any;
  @Input() dataIndex!: number;
  @Output() setRecipeIngredients: EventEmitter<any> = new EventEmitter();

  constructor() {

  }

  handleIngredientsChange(ingredientsData: any) {

    if (ingredientsData.name === 'mealIngredients') {
      this.recipeIngredient.ingredient = ingredientsData.value.trim();
    } else if (ingredientsData.name === 'ingredientsQuantity') {
      this.recipeIngredient.quantity = ingredientsData.value.trim();
    } else if (ingredientsData.ngControl.name === 'ingredientsMeasurement') {
      this.recipeIngredient.measurement = ingredientsData.value.trim();
    }

    this.recipeIngredient.index = this.dataIndex;

    this.setRecipeIngredients.emit(this.recipeIngredient);

  }

}
