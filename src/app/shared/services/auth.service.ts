import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from '../index'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient, private appService: AppService ) { }

  async isAuthenticated() {
    try {
      const isAuthenticated = sessionStorage.getItem('token')
      if (isAuthenticated) {
        this.appService.loggedIn$.next(true)
        return true
      }
      this.appService.loggedIn$.next(false)
      return false
    } catch (error) {
      return false
    }
  }
   logout() {
    sessionStorage.clear()
    return true
  }

  isAuthorized(url: any) {
    const roles = this.getUserRoles()
    if ( url.indexOf('admin')  > -1 && roles && roles.indexOf('edit') === -1)  {
        return false
    }
    return true
  }
  getUserRoles() {
    if (sessionStorage.getItem('roles')) {
      let roles: any = sessionStorage.getItem('roles')
        return JSON.parse(roles)
    }
      return []
  }

  storeUserToken(token: string) {
    sessionStorage.setItem("token", token);
  }
  storeAdminRoles() {
    const permissions = ["view", "edit", "update", "delete"];
    this.appService.permissions$.next(permissions);
    sessionStorage.setItem("roles", JSON.stringify(permissions));
  }
  storeUserRoles() {
    const permissions = ["view"];
    this.appService.permissions$.next(permissions);
    sessionStorage.setItem("roles", JSON.stringify(permissions));
  }

  async login(body: any) {
    return new Promise((resolve, reject) => {
      this.http.post('https://fakestoreapi.com/auth/login', body).pipe().subscribe({
        next: (data => {
          resolve(data)
        }),
        error: (err => {
          reject(false)
        })
      })
  })
  }

  async signup(body: any): Promise<any> {
    return new Promise((resolve, reject) => {
        this.http.post('https://fakestoreapi.com/users', body).pipe().subscribe({
          next: (data => {
            resolve(data)
          }),
          error: (err => {
            reject(false)
          })
        })
    })
  }
}
