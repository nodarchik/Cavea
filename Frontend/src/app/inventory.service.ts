// Import necessary libraries and components
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './models/inventory';

// Injectable decorator to allow this service to be injected into other components or services
@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  private apiUrl = 'http://localhost:3001'; // The base URL for the API

  constructor(private http: HttpClient) {} // Inject HttpClient into the service

  // Method to get inventories from the API
  getInventories(
    page: number,
    pageSize: number = 20,
    location?: string | null,
    sortBy?: string
  ): Observable<any> {
    const offset = (page - 1) * pageSize;
    let url = `${this.apiUrl}/inventories?limit=${pageSize}&offset=${offset}`;
    if (location) {
      url += `&location=${location}`;
    }
    if (sortBy) {
      url += `&sortBy=${sortBy}`;
    }

    return this.http.get<any>(url);
  }

  // Method to add a new inventory to the API
  addInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.post<Inventory>(`${this.apiUrl}/inventories`, inventory, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  // Method to delete an inventory from the API
  deleteInventory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/inventories/${id}`);
  }
}
