import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) { }
  
  getAddress() {
    return this.http.get(`${environment.apiUrl}/user-address/address/list`);
  }
  addAdress(data: any) {
    return this.http.post(`${environment.apiUrl}/user-address/address/create`, data)
  }

  defaultAdress() {
    return this.http.post(`${environment.apiUrl}/user-address/address/SetAsDefault`,'')
  }

  deleteAddress(){
    return this.http.post(`${environment.apiUrl}/user-address/adress/delete`,'')
  }

  getState(id:any){
    return this.http.get(`${environment.apiUrl}/user-address/country-states-provinces/${id}`)
  }

}
