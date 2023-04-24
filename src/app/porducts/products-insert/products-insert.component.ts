import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../products.service';
import { Product } from '../products.interfaces';

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder, private service: ProductsService){
    this.form = this.fb.group({
      product:['', [Validators.required, Validators.minLength(4)]],
      cost: ['', [Validators.required]],
      description: ['',[Validators.required, Validators.maxLength(150)]],
      quantity: ['', Validators.required],
      _id: ['']
    })
  }

  onSubmit(): void {
    if (this.form.valid) {
      console.log(this.form.value);
      const product = this.form.value as Product;
      this.service.insertProducts(product).subscribe((response) => {
        console.log(response);
      });
    } else {
      console.log('Form is not valid');
    }
  }
}
