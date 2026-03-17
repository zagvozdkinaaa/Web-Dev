import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then((m) => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then((m) => m.AboutComponent)
  },
  {
    path: 'albums',
    loadComponent: () => import('./pages/albums/albums.component').then((m) => m.AlbumsComponent)
  },
  {
    path: 'albums/:id',
    loadComponent: () =>
      import('./pages/album-detail/album-detail.component').then((m) => m.AlbumDetailComponent),
    children: [
      {
        path: 'photos',
        loadComponent: () =>
          import('./pages/album-photos/album-photos.component').then((m) => m.AlbumPhotosComponent)
      }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
