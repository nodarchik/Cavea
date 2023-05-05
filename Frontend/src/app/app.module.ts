import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; // Add this import

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ProductAddComponent,
    ProductListComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, // Add this to the imports array
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
