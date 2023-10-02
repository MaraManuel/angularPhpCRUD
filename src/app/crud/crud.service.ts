import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { map } from 'rxjs/operators';
import { HttpResponse } from './models/http-response';
import { Observable } from 'rxjs';
import { Product } from './models/product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private httpClient: HttpClient) { }

  loadProducts(){
    const url = environment.API_Endpoint + 'view.php'; 
    return this.httpClient.get(url).pipe(map((data) => data));
  }

  createProduct(data: any): Observable<HttpResponse>{
    const url = environment.API_Endpoint + 'create.php';
    return this.httpClient.post<HttpResponse>(url, data).pipe(map((data) => data));
  }

  loadProductInfo(productId: any): Observable<Product>{
     const url = environment.API_Endpoint + 'view_one.php?id=' + productId;
     return this.httpClient.get<Product>(url).pipe(map((data) => data));
  }
  updateProductDetails(data: any): Observable<HttpResponse>{
    const url = environment.API_Endpoint + 'update.php';
    return this.httpClient.post<HttpResponse>(url, data).pipe(map((data) => data));
  }
  deleteProduct(productId: any): Observable<HttpResponse>{
    const url = environment.API_Endpoint + 'delete.php?id=' + productId;
    return this.httpClient.get<HttpResponse>(url).pipe(map((data) => data));
  }



}
