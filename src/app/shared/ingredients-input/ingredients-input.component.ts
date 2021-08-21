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
  @Input() dataIndex!: number;
  @Output() setRecipeIngredients: EventEmitter<any> = new EventEmitter();

  data = {
    mealIngredients: '',
    ingredientsQuantity: 0,
    ingredientsMeasurement: '',
    index: 0
  };

  constructor() {

  }

  handleIngredientsChange(ingredientsData: any) {
    
    if (ingredientsData.name === 'mealIngredients') {
      this.data.mealIngredients = ingredientsData.value;
    } else if (ingredientsData.name === 'ingredientsQuantity') {
      this.data.ingredientsQuantity = ingredientsData.value;
    } else if (ingredientsData.ngControl.name === 'ingredientsMeasurement') {
      this.data.ingredientsMeasurement = ingredientsData.value;
    }
        
    this.data.index = this.dataIndex;

    this.setRecipeIngredients.emit(this.data);

  }

}
