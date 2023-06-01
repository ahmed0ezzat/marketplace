import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CategoriesService, HelperService } from 'src/app/shared';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-product-dialog',
  templateUrl: './add-new-product-dialog.component.html',
  styleUrls: ['./add-new-product-dialog.component.scss']
})
export class AddNewProductDialogComponent {
  categories: any = []
   productsForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    price: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    category: new FormControl('', [Validators.required]),
  });
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private categoriesService: CategoriesService, 
    private helper: HelperService,
    ) {
      
    }

  async ngOnInit() {
    await this.getCategories()
  }

  async getCategories() {
    try {
      this.categories = await this.categoriesService.getCategories()
      
    } catch (error) {
        this.helper.openSnackBar('Error getting categories')
    }
  }

 
}
