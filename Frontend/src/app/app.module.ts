// Import necessary libraries and components
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './main-page/main-page.component';
import { PaginationComponent } from './pagination/pagination.component';

// Define the application's main module
@NgModule({
  declarations: [
    // The components, directives, and pipes that belong to this module
    AppComponent,
    InventoryListComponent,
    AddInventoryComponent,
    MainPageComponent,
    PaginationComponent,
  ],
  imports: [
    // The other modules whose exported classes are needed by component templates declared in this module
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [], // The providers of services that the components in this module need
  bootstrap: [AppComponent], // The main application view, called the root component, that hosts all other app views
})
export class AppModule {} // Export AppModule for bootstraping the application