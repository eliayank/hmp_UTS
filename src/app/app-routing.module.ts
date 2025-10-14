import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'kategori',
    loadChildren: () => import('./pages/kategori/kategori.module').then( m => m.KategoriPageModule)
  },
  {
    path: 'daftar-berita/:kategori',
    loadChildren: () => import('./pages/daftar-berita/daftar-berita.module').then( m => m.DaftarBeritaPageModule)
  },
  {
    path: 'baca-berita/:id',
    loadChildren: () => import('./pages/baca-berita/baca-berita.module').then( m => m.BacaBeritaPageModule)
  },
  {
    path: 'favorit',
    loadChildren: () => import('./pages/favorit/favorit.module').then( m => m.FavoritPageModule)
  },
  {
    path: 'cari-berita',
    loadChildren: () => import('./pages/cari-berita/cari-berita.module').then( m => m.CariBeritaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
