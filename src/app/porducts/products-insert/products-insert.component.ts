import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-insert',
  templateUrl: './products-insert.component.html',
  styleUrls: ['./products-insert.component.css']
})
export class ProductsInsertComponent {

  form: FormGroup;

  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      product:['', [Validators.required, Validators.minLength(4)]],
      cost: ['', [Validators.required]],
      description: ['',[Validators.required, Validators.maxLength(150)]],
      quantity: ['', Validators.required],
      _id: ['']
    })
  }
}
