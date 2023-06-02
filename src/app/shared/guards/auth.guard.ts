import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router , UrlTree} from '@angular/router';
import { AuthService } from '../services';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
async canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean | UrlTree> {
  /** Check User Authentication and authorization */
  const isAuthenticated = await this.authService.isAuthenticated()
  const isAuthorized = await this.authService.isAuthorized(state.url)
  if (!isAuthenticated) {
    return this.router.navigate(['/login'])
  }
  if (!isAuthorized) {
    return this.router.navigate(['/notAuthorized'])
  }
  return true
}

}
