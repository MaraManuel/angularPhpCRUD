import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {

  
  constructor( private crudService : CrudService){

  }

}
