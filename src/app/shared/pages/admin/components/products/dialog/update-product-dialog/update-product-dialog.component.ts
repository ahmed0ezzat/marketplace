import { Component, Inject } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { CategoriesService, HelperService } from "src/app/shared";
import { MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-update-product-dialog",
  templateUrl: "./update-product-dialog.component.html",
  styleUrls: ["./update-product-dialog.component.scss"],
})
export class UpdateProductDialogComponent {
  categories: any = [];
  productsForm: FormGroup = new FormGroup({
    id: new FormControl("", [Validators.required]),
    title: new FormControl("", [Validators.required]),
    price: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    category: new FormControl("", [Validators.required]),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriesService: CategoriesService,
    private helper: HelperService
  ) {}
  async ngOnInit() {
    if (this.data) {
      this.productsForm.patchValue(this.data)
    }
    await this.getCategories();
  }

  async getCategories() {
    try {
      this.categories = await this.categoriesService.getCategories();
    } catch (error) {
      this.helper.openSnackBar("Error getting categories");
    }
  }
}
