import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping/shopping-list.service';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chocolate Cake',
      'Great cake',
      'https://c1.staticflickr.com/6/5215/5459511727_ab1cbbf7ba_b.jpg',
      [
        new Ingredient('Flower', 1),
        new Ingredient('Eggs', 2),
        new Ingredient('Water', 1),
        new Ingredient('Chocolate', 1)
      ]),
    new Recipe('Pasta With Meat balls',
      'Italian recipe',
      'https://akispetretzikis.com/system/uploads/medium/data/4349/recipe_main_akis-petretzikis-zymarika-me-keftedakia-galopoulas.jpg',
      [
        new Ingredient('Pepper', 1),
        new Ingredient('Meat', 2),
        new Ingredient('Tomatos', 1),
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    // return this.recipes.find(r => r.id === id);
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
