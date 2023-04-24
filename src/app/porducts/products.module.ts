import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  {path: 'list', component:ProductsListComponent}
];

@NgModule({
  declarations: [
    ProductsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
})
export class ProductsModule { }
