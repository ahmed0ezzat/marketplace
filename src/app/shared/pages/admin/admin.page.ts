import { Component } from "@angular/core";
import { Router } from "@angular/router";
@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage {
  isSubmit: boolean = false;
  isLoading: boolean = false;
  constructor(public router: Router) {}

  navigateProducts() {
    this.router.navigate(["/admin/products"]);
  }
  navigateToCategories() {
    this.router.navigate(["/admin/categories"]);
  }
}
