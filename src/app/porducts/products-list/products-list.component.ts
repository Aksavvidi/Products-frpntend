import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductsAPIList } from '../products.interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  constructor(private productsService: ProductsService) {}

  loading = false;

  ngOnInit(): void {
      console.log("Starting 'findAll' API call");
      this.loading = true;
      this.productsService.findAll().subscribe({
        next: (apiProData: ProductsAPIList) => {
          const {status, data} = apiProData
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
}
