import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompareService {

  constructor(private http :HttpClient) { }
  getCompares() {
    return this.http.get(`${environment.apiUrl}/compare-products/compare-products`);
  }

  addCompare(data: any) {
    return this.http.post(`${environment.apiUrl}/compare-products/comparing-product/addto-comparison`, data);
  }

  removeCompare(data: any) {
    return this.http.delete(`${environment.apiUrl}/compare-products/comparing-product/remove`, { body: data });
  }
}
