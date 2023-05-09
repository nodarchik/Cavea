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
  locations: Set<string> = new Set();
  selectedLocation: string = '';
  sortBy: string = '';
  sortOrder: 'ASC' | 'DESC' = 'ASC';
  
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  totalPages: number = 1;

  fetchProducts(location?: string | null, sortBy?: string): void {
    this.productService
      .getProducts(this.currentPage, this.pageSize, location, sortBy)
      .subscribe((response: any) => {
        this.products = response.products;
        this.totalPages = Math.ceil(response.totalCount / this.pageSize);
        response.products.forEach((product: Product) => {
          this.locations.add(product.location);
        });
      });
  }

  onSortChange(target: EventTarget | null): void {
    const selectElement = target as HTMLSelectElement;
    const sortBy = selectElement.value;
    console.log("onSortChange called with:", sortBy);
    this.fetchProducts(this.selectedLocation, sortBy);
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
