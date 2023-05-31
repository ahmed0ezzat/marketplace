import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient ) { }

  async isAuthenticated() {
    try {
      return sessionStorage.getItem('token') ? true : false
    } catch (error) {
      return false
    }
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
