// Import necessary libraries and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component'; 

// Define the application's routes
const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' }, // Redirect to /main-page when the path is empty
  { path: 'main-page', component: MainPageComponent }, // Route for main page
  { path: 'inventories', component: InventoryListComponent  }, // Route for inventory list
  { path: 'add-inventory', component: AddInventoryComponent }, // Route for add inventory
];

// Define the application's routing module
@NgModule({
  imports: [RouterModule.forRoot(routes)], // Configure the router at the application's root with routes
  exports: [RouterModule], // Export RouterModule to make router directives available for use in the app component templates
})
export class AppRoutingModule {} // Export AppRoutingModule for use in AppModule