import { Component, ViewChild } from "@angular/core";
import { MatTableDataSource } from "@angular/material/table";
import { CategoriesService, ProductsService } from "../../../../index";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: "app-categories",
  templateUrl: "./categories.component.html",
  styleUrls: ["./categories.component.scss"],
})
export class CategoriesComponent {
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;
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
    private productsService: ProductsService
  ) {}

  async ngOnInit() {
    try {
      const serviceData: any = await this.productsService.getProducts();
      this.dataSource = new MatTableDataSource(serviceData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    } catch (error) {
      //TODO: throw error
    }
  }
}
