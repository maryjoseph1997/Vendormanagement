import { Component, OnInit } from '@angular/core';

import { VendorService } from '../vendor.service';
import { VendorContact } from '../VendorContact';

@Component({
  selector: 'app-add-vendor',
  templateUrl: './add-vendor.component.html',
  styleUrls: ['./add-vendor.component.scss']
})
export class AddVendorComponent implements OnInit {

  vendorDetail=new VendorContact();
  constructor(private _mainservice:VendorService) { }

  ngOnInit() {
    this.getVendorById();
  }

  private reset()
  {
    this.vendorDetail.vName=null;
    this.vendorDetail.vAddress=null;
    this.vendorDetail.vLocation=null;
    this.vendorDetail.vPincode=null;
    this.vendorDetail.cEmail=null;
    this.vendorDetail.cDepartment=null;
    this.vendorDetail.cPhone=null;
    this.vendorDetail.cName=null;
    this.vendorDetail.vService=null;

  }

  add():void{
    console.log(this.vendorDetail);
    this. _mainservice.add(this.vendorDetail).subscribe((response)=>
    {
      console.log(response);
      this.reset();
    },(error)=>{
      console.log(error);
    }
    );
  }
getVendorById(): void{
  this._mainservice.getVendorDetailsById().subscribe((Data)=>
  {
    this.vendorDetail=Data,
    console.log(Data);
  },(error)=>{
    console.log(error);
  }
  );
}

}
