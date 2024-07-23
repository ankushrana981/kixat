import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsService {

  constructor(private http: HttpClient) { }
  getProductDetail(productSlug: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/product-front/product-details/${productSlug}`
    );
  }

  getProductOverview(productSlug: string): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/product-front/product-overview/${productSlug}`
    );
  }
  getReviews(entityId: number, slug: string, pageNumber: number, pageSize: number): Observable<any> {
    let params = new HttpParams().append('pageNumber', pageNumber).append('pageSize', pageSize);
    return this.http.get(`${environment.apiUrl}/reviews/list-Reviews?entityId=${entityId}&entityTypeId=${slug}`, { params: params });
  }
}
