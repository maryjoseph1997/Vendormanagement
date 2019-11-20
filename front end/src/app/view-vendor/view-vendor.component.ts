import { Component, OnInit } from '@angular/core';

import { VendorService } from '../vendor.service';
import { VendorContact } from '../VendorContact';


@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent implements OnInit {

 //
  details:VendorContact[];

  constructor(private _mainservice:VendorService) { }

  ngOnInit() {
    this.getVendorDetails();
  
  }

  //method for getting vendor+ its contact details
  getVendorDetails(): void{
    this._mainservice.getVendorDetails().subscribe((Data)=>
    {
      this.details=Data,
      console.log(Data);
    },(error)=>{
      console.log(error);
    }
    );
  }

  //search 
  search(searchString:string){
    if(searchString!=null){
    this._mainservice.search(searchString).subscribe((Data)=>
    {
      this.details=Data,
     console.log(Data);
  },(error)=>{
      console.log(error);
    }
    );
  }else{
    this.getVendorDetails();
  }
}




}
