import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getProducts(page: number, pageSize: number = 20, location?: string | null): Observable<any> {
    const offset = (page - 1) * pageSize;
    let url = `${this.apiUrl}/products?limit=${pageSize}&offset=${offset}`;
    if (location) {
      url += `&location=${location}`;
    }
    return this.http.get<any>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(`${this.apiUrl}/products`, product, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/products/${id}`);
  }
}
