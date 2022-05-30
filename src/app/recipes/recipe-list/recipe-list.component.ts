import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'Test description 1',
      'https://picsum.photos/400/300'
    ),
    new Recipe(
      'Test recipe 1',
      'Test description 1',
      'https://picsum.photos/400/300'
    ),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}
  onRecipeWasSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
