import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
 
  OnInit():void{

  }

    // Each Column Definition results in one Column.
    public columnDefs: ColDef[] = [
      { field: 'make'},
      { field: 'model'},
      { field: 'price' }
    ];

    rowData = [
      { make: 'Toyota', model: 'Celica', price: 3500},
      { make: 'Ford', model: 'Mondeo', price: 3200},
      { make: 'Porsche', model: 'Boxter', price: 7200},
    ];


  
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
