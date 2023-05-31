import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPage } from './admin.page'

import {
  CategoriesComponent,
  ProductsComponent
} from './components';

const routes: Routes = [
  { path: '', component: AdminPage },
  { path: 'categories', component: CategoriesComponent },
  { path: 'products', component: ProductsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LzRoutingModule {}
