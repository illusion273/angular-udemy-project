import {  Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipesService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'Test description 1',
      'https://picsum.photos/400/300',
      [new Ingredient('meat', 1), new Ingredient('fries', 20)]
    ),
    new Recipe(
      'Test recipe 2',
      'Test description 2',
      'https://picsum.photos/400/300',
      [new Ingredient('meat', 1), new Ingredient('buns', 2)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeByIndex(index: number) {
    return this.recipes[index];
  }
}
