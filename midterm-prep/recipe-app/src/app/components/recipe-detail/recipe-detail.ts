import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../services/recipe';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  standalone: true,
  templateUrl: './recipe-detail.html'
})

export class RecipeDetail {

  private route = inject(ActivatedRoute);
  private recipeService = inject(RecipeService);

  recipe?: Recipe;

  ngOnInit() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.recipeService.getRecipe(id).subscribe(data => {
      this.recipe = data;
    });

  }

}
