import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  newProduct = {
    location: '',
    name: '',
    price: 0,
  };

  constructor(private productService: ProductService, private router: Router) {}

  addProduct(): void {
    if (this.newProduct.location && this.newProduct.name && this.newProduct.price) {
      this.productService.addProduct(this.newProduct).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }
}
