import { Component, OnInit, ChangeDetectorRef} from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  currentPage: number = 1;
  pageSize: number = 20;

  constructor(private productService: ProductService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  totalPages: number = 1;

  fetchProducts(): void {
    console.log('Fetching products for page', this.currentPage);
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe((response: any) => {
      this.products = response.products;
      this.totalPages = Math.ceil(response.totalCount / this.pageSize);
      this.cdr.detectChanges(); // Add this line to manually trigger change detection
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  onPageChange(newPage: number): void {
    console.log('Changing page to', newPage); // Add this line
    this.currentPage = newPage;
    this.fetchProducts();
  }
}
