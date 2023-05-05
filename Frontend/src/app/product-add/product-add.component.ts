import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css'],
})
export class ProductAddComponent implements OnInit {
  productForm: FormGroup;
  locations = ['Main Office', 'Galerea', 'Tbilisi Moli', 'East Point', 'City Mall'];

  constructor(private fb: FormBuilder, private productService: ProductService) {
    this.productForm = this.fb.group({
      location: ['', Validators.required],
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(1)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productForm.valid) {
      this.productService.addProduct(this.productForm.value).subscribe(() => {
        this.productForm.reset();
        alert('Product added successfully!');
      });
    } else {
      alert('Please fill in all the fields correctly.');
    }
  }
}