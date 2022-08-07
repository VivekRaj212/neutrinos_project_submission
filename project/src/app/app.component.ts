import { Component } from '@angular/core';
import {ProductsDataService} from "./service/products-data.service"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project';
  users: any;
  constructor(private productData: ProductsDataService){

    this.productData.products().subscribe((data)=> {

      
      console.log(data);
      
    })
  }


}
