export interface IRecipe {
    $id: string;
    name: string;
    description: string;
    ingredients: {
        ingredient: string;
        quantity: number;
        measurement: string;
    }[];
    directions: string;
    imageId: string;
}