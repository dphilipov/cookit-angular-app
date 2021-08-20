export interface IRecipe {
    name: string;
    description: string;
    ingredients?: {
        ingredient: string;
        quantity: number;
        measurements: string;
    }[];
    directions: string;
    imageId: string;
}