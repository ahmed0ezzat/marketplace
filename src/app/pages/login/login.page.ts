import { Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import {
  AuthService,
  HelperService,
  AppService,
} from "src/app/shared/services";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage {
  isSubmit: boolean = false;
  isLoading: boolean = false;

  form: FormGroup = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
  });
  constructor(
    public router: Router,
    private authService: AuthService,
    private helper: HelperService,
  ) {}

  async submit() {
    this.isSubmit = true;
    this.isLoading = true;
    if (this.form.valid) {
      console.log("add new user ..");
      let userForm = this.form.value;
      const login = {
        username: userForm.username,
        password: userForm.password,
      };
      try {
        const user: any = await this.authService.login(login);
        /** setup static roles for admin user (mor_2314) */
        userForm.username === "mor_2314"
          ? this.authService.storeAdminRoles()
          : this.authService.storeUserRoles();
        this.authService.storeUserToken(user.token);
        await this.helper.openSnackBar("Success login!");
        setTimeout(() => {
          this.router.navigate(["/"]);
        }, 200);
      } catch (error) {
        await this.helper.openSnackBar(
          "Wrong username or password, please try again or contact the administrator"
        );
      }
    }
    this.isLoading = false;
  }
  navigateToSignup() {
    this.router.navigate(["/signup"]);
  }
}
