import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  constructor() {}

  onPageChange(newPage: number): void {
    console.log('New page:', newPage);
    // Update the products list according to the new page
  }
}
