import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, HelperService } from 'src/app/shared/services';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  isSubmit: boolean = false;
  isLoading: boolean = false;

  form: FormGroup = new FormGroup({
    username: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  });
  constructor(public router: Router, private authService: AuthService, private helper: HelperService) {}

  async submit() {
    this.isSubmit = true;
   
    if (
      this.form.get('password')?.value !==
      this.form.get('confirmPassword')?.value) {
      this.form.get('password')?.setErrors({ passwordNotMatching: true });
      this.form.get('confirmPassword')?.setErrors({ passwordNotMatching: true });
      return;
    }
    if (this.form.valid) {
      console.log('add new user ..');
      let userForm = this.form.value
      const user = {
        email: userForm.email,
        username: userForm.username,
        password: userForm.password,
        name: {
          firstname:userForm.firstname,
          lastname:userForm.lastname
          }
      }
      try {
        await this.authService.signup(user)
        await this.helper.openSnackBar('Success signup!, you will be redirected to login')
        setTimeout(() => {
          this.router.navigate(['/login'])
        }, 1000);
      } catch (error) {
        await this.helper.openSnackBar('Signup Error, please try again or contact the administrator')
      }
    }
  }

  navigateToSignup() {
    this.router.navigate(['/signup']);
  }
}
