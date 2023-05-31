import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router , UrlTree} from '@angular/router';
import { AuthService } from '../services';

// export const guardsGuard = async () => {
//   const router = inject(Router);
//   const authService = inject(AuthService);
//   const isAuthenticated = await authService.isAuthenticated();
//   console.log('isAuthenticated', isAuthenticated);
//   return isAuthenticated ? true : router.navigate(['/login']);
// };
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}
async canActivate(
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Promise<boolean | UrlTree> {
  /** Authentication and authorization */
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
