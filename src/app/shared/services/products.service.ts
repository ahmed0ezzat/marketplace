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

  async addProducts(data: any) {
    return new Promise((resolve, reject) => {
      this.http.post('https://fakestoreapi.com/products', data).pipe().subscribe({
        next: (data => {
          resolve(data)
        }),
        error: (err => {
          reject(false)
        })
      })
  })
  }

  async updateProducts(data: any) {
    return new Promise((resolve, reject) => {
      this.http.put(`https://fakestoreapi.com/products/${data.id}`, data).pipe().subscribe({
        next: (data => {
          resolve(data)
        }),
        error: (err => {
          reject(false)
        })
      })
  })
  }

  async deleteProduct(id: string) {
    return new Promise((resolve, reject) => {
      this.http.delete(`https://fakestoreapi.com/products/${id}`).pipe().subscribe({
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
