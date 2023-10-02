import { CrudService } from './../crud.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
 
 

    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [ 
      { 
        field: 'p_name', 
        headerName: 'Name', 
        sortable: true,
        headerClass: 'header-cell',
      },
      { 
        field: 'p_description', 
        headerName: 'Description', 
        sortable: true,
        headerClass: 'header-cell', 
      },
      { 
        field: 'p_price', 
        headerName: 'Price', 
        sortable: true,
        headerClass: 'header-cell', 
        cellRenderer: this.priceCellRender.bind(this)
      },
      { 
        field: '', 
        headerName: 'Actions',  
        headerClass: 'header-cell',
        width: 240,
        cellRenderer: this.actionRender.bind(this)
      },
    ];

    rowData: any = [ ];
    gridOptions = {
      rowHeight: 50
    }

    productList: any = [];
    productListSubscribe: any;

    OnInit():void{
 
      this.getProductList(); 
    }

    actionRender(params: any){
      let div = document.createElement('div');
      let htmlCode = '<button type="button" class="btn btn-success" data-toggle="collapse">View</button>\n ' +
      '<button type="button" class="btn btn-danger" >Delete</button>' + 
      '<button type="button" class="btn btn-warning" >Edit</button>';

      div.innerHTML = htmlCode;

      //handle view button
      let viewButton =  div.querySelector('.btn-success');
      // @ts-ignore
      viewButton.addEventListener('click', () =>{
        this.viewProductDetails(params);
      })

      
      //handle edit button
      let editButton =  div.querySelector('.btn-warning');
      // @ts-ignore
      editButton.addEventListener('click', () =>{
        this.editProductDetails(params);
      })

      
      //handle view button
      let deleteButton =  div.querySelector('.btn-danger');
      // @ts-ignore
      deleteButton.addEventListener('click', () =>{
        this.deleteProductDetails(params);
      })

      
      return div;
    }

    viewProductDetails(params: any){
      this.router.navigate(['/crud/view-product-details/' + params.data.p_id]);
     
    }
    editProductDetails(params: any){
      this.router.navigate(['/crud/update-product/' + params.data.p_id]);
     
    }
    deleteProductDetails(params: any){

      this.crudService.deleteProduct(params.data.p_id).subscribe(res => {
        if(res.result === 'success')
        this.getProductList();
      })  
      
    }

    priceCellRender(params: any){
      return '$ ' + params.data.p_price;

    }

    getProductList(){
      this.productListSubscribe = this.crudService.loadProducts().subscribe(res => {

      this.productList = res; 
      this.rowData = res;

      console.log('res', res);

      });
      
    }

    constructor( private crudService : CrudService,
      private router: Router)
    {

       this.OnInit();
    }

  
    /*
    // DefaultColDef sets props common to all Columns
    public defaultColDef: ColDef = {
      sortable: true,
      filter: true,
    };
    
    // Data that gets displayed in the grid
    public rowData$!: Observable<any[]>;
  
    // For accessing the Grid's API
    @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
    constructor(private http: HttpClient) {}
  
    // Example load data from server
    onGridReady(params: GridReadyEvent) {
      this.rowData$ = this.http
        .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
    }
  
    // Example of consuming Grid Event
    onCellClicked( e: CellClickedEvent): void {
      console.log('cellClicked', e);
    }
  
    // Example using Grid's API
    clearSelection(): void {
      this.agGrid.api.deselectAll();
    }*/

}
