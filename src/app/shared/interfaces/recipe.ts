export interface IRecipe {
    name: string;
    description: string;
    ingredients: {
        ingredient: string;
        quantity: number;
        measurements: string;
    }[];
    imageId: any;
}