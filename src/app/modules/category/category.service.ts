import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http :HttpClient) { }
  getCategory(id: number): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/category/CategoryDetail/${id}`,
      {}
    );
  }
  
  getSubCategory(id: number): Observable<any> {
    return this.http.post(
      `${environment.apiUrl}/category/CategoryDetail/${id}`,
      {}
    );
  }
}
