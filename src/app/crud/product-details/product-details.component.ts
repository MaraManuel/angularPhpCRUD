import { Component } from '@angular/core';
import { CrudService } from '../crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent {
  //@ts-ignore
  productDetails: Product;

  
  constructor( private crudService : CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute ){

  }

  ngOnInit(){
    let productId = ''

    if(this.activatedRoute.snapshot.params['productId']){
      productId = this.activatedRoute.snapshot.params['productId'];
    }

    if(productId != ''){
      this.loadProductDetails(productId);

    }
  }

loadProductDetails(productId: any){
  
  this.crudService.loadProductInfo(productId).subscribe(res => {
    this.productDetails = res;

  });

}

}
