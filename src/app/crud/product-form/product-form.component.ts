import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {

  
  constructor( private crudService : CrudService){

  }

}
