import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  async getProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://fakestoreapi.com/products').pipe().subscribe({
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
