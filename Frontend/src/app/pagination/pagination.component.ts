// Import necessary libraries and components
import { Component, Input, Output, EventEmitter } from '@angular/core';

// Component decorator to define meta data for PaginationComponent
@Component({
  selector: 'app-pagination', // The name of the HTML tag for this component
  templateUrl: './pagination.component.html', // The URL of the component's HTML template
  styleUrls: ['./pagination.component.css'], // The URLs of the stylesheets used by this component
})
export class PaginationComponent {
  @Input() totalPages: number = 1; // Input property for total pages
  @Input() currentPage: number = 1; // Input property for current page
  @Input() maxVisiblePages = 20; // Input property for maximum visible pages
  @Output() pageChanged = new EventEmitter<number>(); // Output property to emit page change event

  // Getter to return the array of visible page numbers
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

  // Function to handle page click
  onPageClick(page: number) {
    // Emit the page change event
    this.pageChanged.emit(page);
  }
  // Getter to return array of page numbers
  get pagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  // Function to navigate to a specific page
  goToPage(page: number): void {
    // Update current page and emit page change event
    this.currentPage = page;
    this.pageChanged.emit(this.currentPage);
  }
  // Function to navigate to previous page
  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChanged.emit(this.currentPage);
    }
  }
  // Function to navigate to next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChanged.emit(this.currentPage);
    }
  }
}