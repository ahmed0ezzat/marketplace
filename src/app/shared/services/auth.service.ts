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
    console.log(url.indexOf('admin'))
    const roles = this.getUserRoles()
    // const roles = this.getUserRoles()[0]?.split(',')
    console.log(roles.indexOf('edit'))
    console.log(this.getUserRoles().indexOf('edit'))
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
