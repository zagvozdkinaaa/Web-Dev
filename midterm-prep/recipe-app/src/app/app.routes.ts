import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Recipies } from './components/recipies/recipies';
import { RecipeDetail } from './components/recipe-detail/recipe-detail';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'home',
    component: Home
  },

  {
    path: 'about',
    component: About
  },

  {
    path: 'recipes',
    component: Recipies
  },

  {
    path: 'recipes/:id',
    component: RecipeDetail
  }
];
