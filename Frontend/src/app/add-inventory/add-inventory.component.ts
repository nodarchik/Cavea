import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { Inventory  } from '../models/inventory';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-inventory', 
  templateUrl: './add-inventory.component.html', 
  styleUrls: ['./add-inventory.component.css'],
})
export class AddInventoryComponent implements OnInit { 
  newInventory: Omit<Inventory, 'id'> = { 
    name: '',
    location: '',
    price: null,
  };

  constructor(private inventoryService: InventoryService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(inventoryForm: NgForm): void { 
    if (inventoryForm.valid) {
      this.inventoryService.addInventory(this.newInventory).subscribe({ 
        next: () => {
          this.newInventory = {
            name: '',
            location: '',
            price: 0,
          };
        },
        error: (error) => {
          console.log("Error:", error);
        },
        complete: () => {
          console.log("Add inventory request completed");
          this.router.navigate(['/']); 
        },
      });
    } else {
      console.log("Form is not valid");
    }
  }
}