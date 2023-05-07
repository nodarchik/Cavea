import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent implements OnInit {
  newProduct: Product = {
    id: 0,
    name: '',
    location: '',
    price: 0,
  };
  productForm: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    this.productService.addProduct(this.newProduct).subscribe((product) => {
      this.newProduct = {
        id: product.id,
        name: '',
        location: '',
        price: 0,
      };
    });
  }
}
