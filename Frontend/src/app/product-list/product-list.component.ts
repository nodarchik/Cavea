import { Component, OnInit } from '@angular/core';
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

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  totalPages: number = 1;

  fetchProducts(): void {
    this.productService.getProducts(this.currentPage, this.pageSize).subscribe((response: any) => {
      this.products = response.products;
      this.totalPages = Math.ceil(response.totalCount / this.pageSize);
    });
  }

  deleteProduct(id: number): void {
    this.productService.deleteProduct(id).subscribe(() => {
      this.fetchProducts();
    });
  }

  onPageChange(newPage: number): void {
    this.currentPage = newPage;
    this.fetchProducts();
  }
}
