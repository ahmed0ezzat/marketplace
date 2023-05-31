import {
  CUSTOM_ELEMENTS_SCHEMA,
  NgModule,
  NO_ERRORS_SCHEMA,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import { LzRoutingModule } from "./admin-routing.module";
import { CategoriesComponent } from "./components";
import { MaterialModule } from "../../../material/material.module";

@NgModule({
  declarations: [CategoriesComponent],
  //SharedModule
  imports: [CommonModule, LzRoutingModule, MaterialModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class LzModule {}
