import { Component } from "@angular/core";
import { AppService, AuthService } from "../../index";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  selectedLang: string = "en";
  isLoggedin: boolean = false;
  langList = [
    {
      title: "en",
    },
    {
      title: "ar",
    },
  ];
  constructor(
    private appServices: AppService,
    public authService: AuthService,
    private router: Router
  ) {
    let storedLang: string = String(localStorage.getItem("lang"));
    if (storedLang) {
      storedLang = storedLang == "null" ? "en" : storedLang;
      this.selectedLang = storedLang;
      this.switchLang(storedLang);
    }
    this.appServices.loggedIn$.subscribe((loggedIn) => {
      this.isLoggedin = loggedIn;
    });
  }
  async ngOnInit() {}
  toggleLang(lang: any) {
    this.selectedLang = lang.title;
    this.switchLang(lang.title);
    this.storeSelectedLang(lang.title);
  }
  switchLang(val: string) {
    return this.appServices.lang$.next(val);
  }

  storeSelectedLang(lang: string) {
    localStorage.setItem("lang", lang);
  }

  logout() {
    this.authService.logout();
    this.appServices.loggedIn$.next(false);
    this.router.navigate(["/login"]);
  }
}
