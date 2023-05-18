// Import necessary libraries and components
import { Component, OnInit } from '@angular/core'; // For creating an Angular component and lifecycle hook
import { InventoryService } from '../inventory.service'; // Service for handling inventory related operations
import { Inventory } from '../models/inventory'; // Model representing an inventory

// Component decorator to define meta data for InventoryListComponent
@Component({
  selector: 'app-inventory-list', // The name of the HTML tag for this component
  templateUrl: './inventory-list.component.html', // The URL of the component's HTML template
  styleUrls: ['./inventory-list.component.css'], // The URLs of the stylesheets used by this component
})
export class InventoryListComponent implements OnInit {
  // Initialize component properties
  inventories: Inventory[] = []; // Array to store inventory objects
  currentPage: number = 1; // Current page number for pagination
  pageSize: number = 20; // Number of items per page for pagination
  locations: Set<string> = new Set(); // Set to store unique locations
  selectedLocation: string = ''; // Current selected location filter
  sortBy: string = ''; // Field to sort by
  sortOrder: 'ASC' | 'DESC' = 'ASC'; // Sort order
  totalCount: number = 0; // Total count of inventories
  totalPages: number = 1; // Total number of pages

  // Injecting services into the component
  constructor(private inventoryService: InventoryService) {}

  // Lifecycle hook that is called after data-bound properties of a directive are initialized
  ngOnInit(): void {
    // Fetch the inventories when the component initializes
    this.fetchInventories();
  }

  // Function to fetch inventories
  fetchInventories(location?: string | null, sortBy?: string): void {
    // Call the getInventories function from the inventoryService
    this.inventoryService
      .getInventories(this.currentPage, this.pageSize, location, sortBy)
      .subscribe((response: any) => {
        // Assign response data to properties
        this.inventories = response.inventories; // Assign the inventories from response
        this.totalCount = response.totalCount; // Assign the totalCount from response
        this.totalPages = Math.ceil(response.totalCount / this.pageSize); // Calculate total pages
        // Loop over the inventories and add the location to the locations set
        response.inventories.forEach((inventory: Inventory) => {
          this.locations.add(inventory.location);
        });
      });
  }

  // Function to handle sort change event
  onSortChange(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement; // Cast target to HTMLSelectElement
    const sortBy = selectElement.value; // Get the value from the select element
    console.log('onSortChange called with:', sortBy); // Log the value
    // Fetch inventories with new sort parameter
    this.fetchInventories(this.selectedLocation, sortBy);
  }

  // Function to delete an inventory
  deleteInventory(id: number): void {
    // Call the deleteInventory function from the inventoryService
    this.inventoryService.deleteInventory(id).subscribe(() => {
      // Fetch the inventories again after deletion
      this.fetchInventories();
    });
  }

  // Function to handle page change event
  onPageChange(newPage: number): void {
    // Set the current page to the new page
    this.currentPage = newPage;
    // Fetch the inventories for the new page
    this.fetchInventories();
  }
}
