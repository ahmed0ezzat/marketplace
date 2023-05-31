import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPage, SignupPage } from './pages';
import { ProductsComponent,
          NotAuthorizedComponent,
        AuthGuard 
      } from './shared'

const routes: Routes = [
  { path: 'login', component: LoginPage },
  { path: 'notAuthorized', component: NotAuthorizedComponent },
  { path: 'signup', component: SignupPage },
  { path: '', component: ProductsComponent, canActivate: [AuthGuard] },
  {
    path: 'admin',
    loadChildren: () => import('./shared/pages/admin/admin.module').then((m) => m.LzModule),
    canActivate: [AuthGuard],
  },
  // {
  //   path: 'user',
  //   loadChildren: () => import('./shared/pages/user/user.module').then((m) => m.LzModule),
  //   canActivate: [AuthGuard],
  // },
  // { path: '**', component: NotFoundComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
