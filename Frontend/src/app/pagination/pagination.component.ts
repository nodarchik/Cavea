import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Output() pageChanged = new EventEmitter<number>();

  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    console.log('PaginationComponent: Going to page', page);
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  previousPage(): void {
    console.log('Going to previous page');
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }
  
  nextPage(): void {
    console.log('Going to next page');
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }
  
}