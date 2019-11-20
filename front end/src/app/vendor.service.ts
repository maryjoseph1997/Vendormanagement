import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { VendorContact } from './VendorContact';




@Injectable({
  providedIn: 'root'
})
export class VendorService {
  
  vId:number;
  constructor(private _httpService: HttpClient,private router:Router) {}
  readonly APIUrl="http://localhost:8081/UST_TrainingInfo/api";

  verifyUser(username:String,password:String){
    return this._httpService.get<boolean>(this.APIUrl +'/login'+'/'+username+'/'+password);
    
  }

  getVendorDetails(): Observable<VendorContact[]>{
    
    return this._httpService.get<VendorContact[]>(this.APIUrl+'/vendordetails/null');
  }

  getVendorDetailsById(): Observable<VendorContact>{
    return this._httpService.get<VendorContact>(this.APIUrl+'/vendorbyid/'+this.vId);
  }


  search(searchString:String):Observable<VendorContact[]>
  {
    return this._httpService.get<VendorContact[]>(this.APIUrl+'/vendordetails/'+searchString);
  }

  add(vendorContactDetails:VendorContact){
    let body = JSON.stringify(vendorContactDetails);
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    let options = { headers: headers }

    if(vendorContactDetails.vId){
      return this._httpService.put(this.APIUrl +'/vendordetail', body, options);
    }
    else{
      return this._httpService.post(this.APIUrl +'/vendordetail', body, options); 
  }
    }

edit(vId:number)
  {
     this.vId=vId;
  }

 disable(vendordetail:VendorContact,vId:number){
  let body = JSON.stringify(vendordetail);
  let headers = new HttpHeaders({'Content-Type': 'application/json'});
  let options = { headers: headers }
   return this._httpService.put(this.APIUrl +'/disablevendor/'+vId, body, options);
}
}
