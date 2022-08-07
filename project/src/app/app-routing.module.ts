import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HeaderComponent } from './component/header/header.component';
import { InventoryComponent } from './component/inventory/inventory.component';
import { LoginComponent } from './component/login/login.component';
import { ProductformComponent } from './component/productform/productform.component';
import { ProductsComponent } from './component/products/products.component';
import { SignupComponent } from './component/signup/signup.component';

const routes: Routes = [
  {path:'', redirectTo:'products',pathMatch:'full'},
  {path:'products', component: ProductsComponent},
  {path:'cart', component: CartComponent},
  {path:'login', component: LoginComponent},
  {path:'signup',component: SignupComponent},
  {path:'productform', component: ProductformComponent},
  {path: "inventory", component:InventoryComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
