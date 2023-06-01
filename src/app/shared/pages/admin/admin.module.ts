import { TranslateModule } from "@ngx-translate/core";
import { CommonModule } from "@angular/common";
import { LzRoutingModule } from "./admin-routing.module";
import { AdminPage } from "./admin.page";
import { MaterialModule } from "../../../material/material.module";
import { SharedModule } from '../../../shared'
import {
  CategoriesComponent, 
  ProductsComponent, 
  DeleteProductConfirmationDialogComponent, 
  AddNewProductDialogComponent } from "./components";
import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";

@NgModule({
  declarations: [
    CategoriesComponent,
    AdminPage,
    ProductsComponent,
    DeleteProductConfirmationDialogComponent,
    AddNewProductDialogComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    LzRoutingModule,
    MaterialModule,
    TranslateModule.forChild({
      extend: true,
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LzModule {}
