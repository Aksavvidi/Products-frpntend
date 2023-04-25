import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { Product, ProductsAPIList } from 'shared';
import { orderBy } from 'lodash-es';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  constructor(private productsService: ProductsService) {}

  loading = false;
  productsList: Product[] = [];
  subscription: Subscription | undefined;

  productsSortType:'asc' | 'desc' = 'asc';
  idSortType:'asc' | 'desc' = 'asc';

  ngOnInit(): void {
      console.log("Starting 'findAll' API call");
      this.loading = true;
      this.subscription = this.productsService.findAll().subscribe({
        next: (apiProData: ProductsAPIList) => {
          const {status, data} = apiProData
          this.productsList = data;
          console.log(status, data);
        },
        error: (error) => { 
          this.loading = false;
          console.log(error)},
        complete: () => {
          this.loading = false;
          console.log('API call completed');
        },
      });
  }

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  toggleProdSort(key:string,) {
    switch (key) {
      case 'product':
        this.productsSortType = 
          this.productsSortType === 'asc' ? 'desc' : 'asc';
        this.productsList = orderBy(this.productsList, [key], [this.productsSortType])
        break;
      case '_id':
          this.idSortType = 
             this.idSortType === 'asc' ? 'desc' : 'asc';
          this.productsList = orderBy(this.productsList, [key], [this.idSortType])
          break;
      default:
        break;
    }
  }
}
