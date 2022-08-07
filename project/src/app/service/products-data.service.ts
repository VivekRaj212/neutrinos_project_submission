import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsDataService {

   url= "http://localhost:9090/api/products/allProduct";
   url1= "http://localhost:9090/api/products/add";
  constructor(private http: HttpClient) { }
products()
  {

    return  this.http.get(this.url)

  }

  saveProducts(data:any)
  {
     
     return this.http.post(this.url1,data);

  }
}
