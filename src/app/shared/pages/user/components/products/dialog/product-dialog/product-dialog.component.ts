import { Component , Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';


@Component({
  selector: 'app-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})

export class ProductDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
 ) { }
ngOnInit() {}
}
