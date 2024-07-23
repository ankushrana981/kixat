import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavouriteService {

  constructor(private http: HttpClient) { }
  getWishlist(pageNumber:number, pageSize:number) {
    return this.http.get(`${environment.apiUrl}/wishlist-products/private-list/${pageNumber}/${pageSize}`);
  }

  addWishlist(data: any) {
    return this.http.post(`${environment.apiUrl}/wishlist-products/add-item`, data);
  }
}
