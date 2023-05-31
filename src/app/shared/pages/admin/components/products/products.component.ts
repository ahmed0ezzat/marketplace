import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { DeleteProductConfirmationDialogComponent } from '../index'
import {
  CategoriesService,
  ProductsService,
  HelperService,
} from "../../../../index";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
})
export class ProductsComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
  isLoading: boolean = false;
  dataSource: any = [];
 

  displayedColumns = [
    "title",
    "category",
    "price",
    "rating",
    "description",
    "action",
  ];
  loading = false;
  constructor(
    public categoriesService: CategoriesService,
    private productsService: ProductsService,
    private helper: HelperService,
    public dialog: MatDialog,
  ) {}

  async ngOnInit() {
    try {
      this.isLoading = true;
      const serviceData: any = await this.productsService.getProducts();
      this.isLoading = false;
      this.dataSource = new MatTableDataSource(serviceData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (error) {
      this.isLoading = false;
      this.helper.openSnackBar(
        "Error loading products, please try again or contact the administrator"
      );
      //TODO: throw error
    }
  }

  openDeleteProductConfirmationDialog(product: any) {
    const dialogRef = this.dialog.open(DeleteProductConfirmationDialogComponent , {
      data: product
    })
    dialogRef.afterClosed().subscribe(async (result) => {
      console.log(result);
      if (result) {
        await this.deleteProduct(product.id)
      }
      //
    })
  }
  async deleteProduct(productId: string) {

    this.isLoading = true;
    try {
      await this.productsService.deleteProduct(productId)
      this.helper.openSnackBar(`product: ${productId} deleted successfully!`)
      // will not fetching all products again as it is fake request and no data will be changed
      this.isLoading = false;
    } catch (error) {
      this.isLoading = false;
        this.helper.openSnackBar(`Error while deleting product: ${productId}`)
    }
  }
}
