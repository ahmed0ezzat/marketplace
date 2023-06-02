import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductDialogComponent } from '../index'
import { ProductsService, CategoriesService, HelperService, } from 'src/app/shared';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
constructor(
  private productsService: ProductsService, 
  private categoriesService: CategoriesService,
  private helper: HelperService,
  public dialog: MatDialog, 
  private router: Router) {

}
  isLoading: boolean = false;
  displayedProducts: any = []
  allProducts: any = []
  categories!: any;
  showSideNav: boolean = false
  selectedCategory = new FormControl('');
  async ngOnInit() {
    try {
     this.isLoading = true
      await this.getAllProducts()
      await this.getAllCategories()
      this.isLoading = false
    } catch (error) {
      this.isLoading = false
      this.helper.openSnackBar('Something went wrong please try again or contact the administrator')
      console.log('Error getting marketplace products')
    }
  
}

async getAllProducts() {
  try {
    this.allProducts = await this.productsService.getProducts()
    return this.displayedProducts = this.allProducts
  } catch (error) {
    throw new Error('Error getting all products')
  }
}
async getAllCategories() {
  try {
    this.categories = await this.categoriesService.getCategories()
  } catch (error) {
    throw new Error('Error getting all categories')
  }
}

trimText(text: string) {
  return text.substring(0 , 100) + '...'
}

updateView() {
  const products = this.allProducts
  if (this.selectedCategory.value !== '') {
   const filteredData = this.allProducts.filter((p: any) => p.category === this.selectedCategory.value)
    return this.displayedProducts = filteredData
  }
  return this.displayedProducts = products
}

openProductDetailsDialog(category: string) {
  const dialogRef = this.dialog.open(ProductDialogComponent , {
    data: category
  })
  dialogRef.afterClosed().subscribe(async (result) => {
    //
  })
}

addToCard() {
  // static method
  return this.helper.openSnackBar('Item Added to your card')
}

navigateToAdminView() {
  this.router.navigate(['/admin/'])
}
}
