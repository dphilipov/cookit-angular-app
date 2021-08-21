export interface IRecipe {
    name: string;
    description: string;
    ingredients: {
        mealIngredients: string;
        ingredientsQuantity: number;
        ingredientsMeasurement: string;
    }[];
    directions: string;
    imageId: string;
}