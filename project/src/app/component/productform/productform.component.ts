import { Component, OnInit } from '@angular/core';
import { ProductsDataService } from 'src/app/service/products-data.service';

@Component({
  selector: 'app-productform',
  templateUrl: './productform.component.html',
  styleUrls: ['./productform.component.css']
})
export class ProductformComponent implements OnInit {

  constructor(private savedData: ProductsDataService) { }

  ngOnInit(): void {

  }


  postData(data: any)
  { 
        this.savedData.saveProducts(data).subscribe((result)=> {
         result
        })  
        
      alert("Data Saved")

  }

 




}
