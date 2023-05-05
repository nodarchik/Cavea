import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Output() pageChange = new EventEmitter<number>();

  currentPage: number = 1;
  pagesArray: number[];

  constructor() {
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  ngOnChanges(): void {
    this.pagesArray = Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
}
