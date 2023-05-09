import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddInventoryComponent } from './add-inventory/add-inventory.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component'; 


const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'inventories', component: InventoryListComponent  },
  { path: 'add-inventory', component: AddInventoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
