import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  constructor(private http:HttpClient) { }
  getShippingAddrress(){
    return this.http.get(`${environment.baseUrl}/checkout/shipping`);
  }
}
