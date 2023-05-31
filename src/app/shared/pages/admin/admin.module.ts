import {TranslateModule} from '@ngx-translate/core';

import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { LzRoutingModule } from "./admin-routing.module";
import { CategoriesComponent, ProductsComponent } from "./components";
import { AdminPage } from './admin.page'
import { MaterialModule } from "../../../material/material.module";
import { DeleteProductConfirmationDialogComponent } from './components/products/dialog/delete-product-confirmation-dialog/delete-product-confirmation-dialog.component';

@NgModule({
  declarations: [
    CategoriesComponent, 
    AdminPage, 
    ProductsComponent, DeleteProductConfirmationDialogComponent],
  imports: [
    CommonModule, 
    LzRoutingModule, 
    MaterialModule,
    TranslateModule.forChild({
      extend: true
    })
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LzModule {}
