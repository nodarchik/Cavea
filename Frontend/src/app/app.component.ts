// Import necessary libraries and components
import { Component } from '@angular/core';

// Component decorator to define meta data for AppComponent
@Component({
  selector: 'app-root', // The name of the HTML tag for this component
  templateUrl: './app.component.html', // The URL of the component's HTML template
  styleUrls: ['./app.component.css'] // The URLs of the stylesheets used by this component
})
export class AppComponent {
  title = 'frontend'; // Property title of AppComponent
}