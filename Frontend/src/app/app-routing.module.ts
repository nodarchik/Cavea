import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductListComponent } from './product-list/product-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/main-page', pathMatch: 'full' },
  { path: 'main-page', component: MainPageComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
