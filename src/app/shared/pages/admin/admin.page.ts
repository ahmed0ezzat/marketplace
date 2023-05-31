import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, HelperService, AppService } from 'src/app/shared/services';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss']
})
export class AdminPage {
  isSubmit: boolean = false
  isLoading: boolean = false
  constructor(
    public router: Router, 
    private authService: AuthService, 
    private helper: HelperService,
    private appService: AppService) { }

    navigateProducts() {
      this.router.navigate(['/admin/products'])
    }
    navigateToCategories() {
      this.router.navigate(['/admin/categories'])
    }
 
 
}
