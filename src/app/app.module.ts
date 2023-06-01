import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPage, SignupPage } from './pages';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CanDirective } from './shared/directives/can.directive';
import { ProductsComponent } from './shared/pages/user/components/products/products.component';
import { NgxStarsModule } from 'ngx-stars';
import { NotAuthorizedComponent } from './shared/components/not-authorized/not-authorized.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SharedModule } from './shared/index'


@NgModule({
  declarations: [AppComponent, LoginPage, HeaderComponent, FooterComponent, SignupPage, CanDirective, ProductsComponent, NotAuthorizedComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    NgxStarsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
// AOT compilation support
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
