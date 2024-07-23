import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }
  
  getCart() {
    return this.http.get(`${environment.baseUrl}/cart/list`);
  }
  addCart(data: any) {
    return this.http.post(`${environment.baseUrl}/cart/add-item`, data);
  }

  updateCart(data: any) {
    return this.http.post(
      `${environment.baseUrl}/cart/update-item-quantity`,
      data
    );
  }

  applyCoupon(data: any) {
    return this.http.post(`${environment.baseUrl}/cart/apply-coupon`, data);
  }
  removeCart(id: any) {
    return this.http.post(`${environment.baseUrl}/cart/remove-item`, id);
  }
}
