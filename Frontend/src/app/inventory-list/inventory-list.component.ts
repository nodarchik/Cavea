import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory } from '../models/inventory';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css'],
})
export class InventoryListComponent implements OnInit {
  inventories: Inventory[] = [];
  currentPage: number = 1;
  pageSize: number = 20;
  locations: Set<string> = new Set();
  selectedLocation: string = '';
  sortBy: string = '';
  sortOrder: 'ASC' | 'DESC' = 'ASC';
  totalCount: number = 0;

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.fetchInventories();
  }

  totalPages: number = 1;

  fetchInventories(location?: string | null, sortBy?: string): void {
    this.inventoryService
      .getInventories(this.currentPage, this.pageSize, location, sortBy)
      .subscribe((response: any) => {
        this.inventories = response.inventories;
        this.totalCount = response.totalCount; 
        this.totalPages = Math.ceil(response.totalCount / this.pageSize);
        response.inventories.forEach((inventory: Inventory) => {
          this.locations.add(inventory.location);
        });
      });
  }

  onSortChange(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement;
    const sortBy = selectElement.value;
    console.log("onSortChange called with:", sortBy);
    this.fetchInventories(this.selectedLocation, sortBy);
  }
  
  deleteInventory(id: number): void {
    this.inventoryService.deleteInventory(id).subscribe(() => {
      this.fetchInventories();
    });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchInventories();
  }
}
