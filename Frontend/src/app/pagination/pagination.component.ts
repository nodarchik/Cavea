import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 1;
  @Input() maxVisiblePages = 20;
  @Output() pageChanged = new EventEmitter<number>();

  get visiblePages(): number[] {
    const visiblePages = [];
    const halfWay = Math.ceil(this.maxVisiblePages / 2);
  
    let start = Math.max(this.currentPage - halfWay + 1, 1);
    let end = Math.min(start + this.maxVisiblePages - 1, this.totalPages);
  
    if (end - start < this.maxVisiblePages - 1) {
      start = Math.max(end - this.maxVisiblePages + 1, 1);
    }
  
    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }
  
    return visiblePages;
  }
  

  onPageClick(page: number) {
    this.pageChanged.emit(page);
  }
  
  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }
  
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }
  
}