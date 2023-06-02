import { Component } from "@angular/core";
import { CategoriesService, ProductsService, HelperService } from "../../../../index";
@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  isLoading : boolean = false;
  categories: any = []
  // inject static category img for good ui view
  categoriesImages = [
    '../../../../../../assets/img/christopher-gower-_aXa21cf7rY-unsplash.jpg',
    '../../../../../../assets/img/samar-ahmad-g2aX18GgTT4-unsplash.jpg',
    '../../../../../../assets/img/waldemar-5hDqrxz5Rpc-unsplash.jpg',
    '../../../../../../assets/img/artem-beliaikin-pJPGCvLblGk-unsplash.jpg',
  ]


  loading = false;
  constructor(
    public categoriesService: CategoriesService,
    private productsService: ProductsService,
    private helper: HelperService
  ) {}

  async ngOnInit() {
    try {
      this.isLoading = true
      this.categories = await this.categoriesService.getCategories();
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      this.helper.openSnackBar('Error loading categories, please try again or contact the administrator')
    }
  }
}
