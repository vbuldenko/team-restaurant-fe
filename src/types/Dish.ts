export type DishCategory = {
  id: number;
  name: string;
  description: string;
};

export type Ingredient = {
  id: number;
  name: string;
};

export type DrinkCategory = {
  id: number;
  name: string;
  description: string;
};

export type Drink = {
  id: number;
  name: string;
  price: number;
  description: string;
  volume: number;
  available: boolean;
  alcoholPercentage: number;
  calories: number;
  imageUrl: string;
  drinkCategory: DrinkCategory;
  countLikes: number;
};

export type Dish = {
  id: number;
  name: string;
  description: string;
  price: number;
  dishCategory: DishCategory;
  ingredients: Ingredient[];
  calories: number;
  weight: number;
  available: boolean;
  imageUrl: string;
  preparationTime: number;
  suggestedDrinks: Drink[];
  countLikes: number;
};
