import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';

const routes: Routes = [
  {path: 'list', component:ProductsListComponent}
];

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    HttpClientModule
  ],
  providers:[ProductsService]
})
export class ProductsModule { }
