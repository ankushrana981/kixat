import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MyAccountService {

  constructor(private http : HttpClient) { }
  getStateProvinces(){
    return this.http.get(`${environment.apiUrl}/states-provinces`);
  }
  getShippingCountries() {
    return this.http.get(
      `${environment.apiUrl}/countries?shippingEnabled=true`
    );
  }
 
  getStateProvincesId(id:any){
    return this.http.get(`${environment.apiUrl}/states-provinces/${id}`);
  }
}
