import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewKategoriPageRoutingModule } from './new-kategori-routing.module';

import { NewKategoriPage } from './new-kategori.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewKategoriPageRoutingModule
  ],
  declarations: [NewKategoriPage]
})
export class NewKategoriPageModule {}
