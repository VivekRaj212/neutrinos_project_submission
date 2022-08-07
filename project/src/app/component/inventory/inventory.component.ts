import { Component, OnInit } from '@angular/core';
import {ProductsDataService} from "src/app/service/products-data.service";
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  apidata: any= []
  constructor(private productData: ProductsDataService) { 

    
  }

  ngOnInit(): void {

    this.productData.products().subscribe((data)=> {

      
     this.apidata= data;
      
    })
  }

}
