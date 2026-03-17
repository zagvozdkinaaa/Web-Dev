import { Component, inject } from '@angular/core';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipes',
  standalone: true,
  template: 'recipes.html'
})

export class Recipies {

  private recipeService = inject(RecipeService);

  recipes: Recipe[] = [];

  ngOnInit() {

    this.recipeService.getRecipes().subscribe(data => {
      this.recipes = data.slice(0, 10);
    });

  }

}
