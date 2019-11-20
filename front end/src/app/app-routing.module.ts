import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewVendorComponent } from './view-vendor/view-vendor.component';
import { AddVendorComponent } from './add-vendor/add-vendor.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  {path:'view',component:ViewVendorComponent},
  {path:'add',component:AddVendorComponent},
  {path:'',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
