import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }


  async getCategories() {
    return new Promise((resolve, reject) => {
      this.http.get('https://fakestoreapi.com/products/categories').pipe().subscribe({
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
