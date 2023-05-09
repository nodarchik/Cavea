import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Inventory } from './models/inventory';

@Injectable({
  providedIn: 'root',
})
export class InventoryService { 
  private apiUrl = 'http://localhost:3001';

  constructor(private http: HttpClient) {}

  getInventories( 
    page: number,
    pageSize: number = 20,
    location?: string | null,
    sortBy?: string,
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

  addInventory(inventory: Inventory): Observable<Inventory> { 
    return this.http.post<Inventory>(`${this.apiUrl}/inventories`, inventory, { 
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    });
  }

  deleteInventory(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/inventories/${id}`); 
  }
}
