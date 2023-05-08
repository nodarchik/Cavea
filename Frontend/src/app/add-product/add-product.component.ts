import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  newProduct: Omit<Product, 'id'> = {
    name: '',
    location: '',
    price: NaN,
  };

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {}

  onSubmit(productForm: NgForm): void {
    if (productForm.valid) {
      this.productService.addProduct(this.newProduct).subscribe({
        next: (product) => {
          this.newProduct = {
            name: '',
            location: '',
            price: 0,
          };
        },
        error: (error) => {
          console.log("Error:", error);
        },
        complete: () => {
          console.log("Add product request completed");
          this.router.navigate(['/']); // Navigate to the product list page
        },
      });
    } else {
      console.log("Form is not valid");
    }
  }
}
