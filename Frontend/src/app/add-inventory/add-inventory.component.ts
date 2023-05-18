// Import necessary libraries and components
import { Component, OnInit } from '@angular/core'; // For creating an Angular component and lifecycle hook
import { InventoryService } from '../inventory.service'; // Service for handling inventory related operations
import { Inventory  } from '../models/inventory'; // Model representing an inventory
import { NgForm } from '@angular/forms'; // Angular's module for handling forms
import { Router } from '@angular/router'; // Angular's Router module for navigation

// Component decorator to define meta data for AddInventoryComponent
@Component({
  selector: 'app-add-inventory', // The name of the HTML tag for this component
  templateUrl: './add-inventory.component.html', // The URL of the component's HTML template
  styleUrls: ['./add-inventory.component.css'], // The URLs of the stylesheets used by this component
})
export class AddInventoryComponent implements OnInit { 
  // Initial new inventory object without 'id' field
  newInventory: Omit<Inventory, 'id'> = { 
    name: '',
    location: '',
    price: null,
  };

  // Injecting services into the component
  constructor(private inventoryService: InventoryService, private router: Router) {}

  // Lifecycle hook that is called after data-bound properties of a directive are initialized
  ngOnInit(): void {}

  // Method called when the form is submitted
  onSubmit(inventoryForm: NgForm): void { 
    // Check if the form is valid
    if (inventoryForm.valid) {
      // Add new inventory by calling the service method
      this.inventoryService.addInventory(this.newInventory).subscribe({ 
        // Function to execute when the Observable emits a new value
        next: () => {
          // Reset the inventory object after successful addition
          this.newInventory = {
            name: '',
            location: '',
            price: 0,
          };
        },
        // Function to handle error
        error: (error) => {
          console.log("Error:", error);
        },
        // Function to execute when the Observable completes
        complete: () => {
          console.log("Add inventory request completed");
          // Navigate to the root route after completion
          this.router.navigate(['/']); 
        },
      });
    } else {
      // Log error when form is not valid
      console.log("Form is not valid");
    }
  }
}