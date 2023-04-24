import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsService } from './products.service';
import { ProductsInsertComponent } from './products-insert/products-insert.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path: 'list', component:ProductsListComponent},
  {path: 'insert', component:ProductsInsertComponent},
];

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes), 
    HttpClientModule, ReactiveFormsModule
  ],
  providers:[ProductsService]
})
export class ProductsModule { }
