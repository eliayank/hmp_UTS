import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewBeritaPage } from './new-berita.page';

const routes: Routes = [
  {
    path: '',
    component: NewBeritaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewBeritaPageRoutingModule {}
