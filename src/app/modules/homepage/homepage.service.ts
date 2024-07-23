import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }
  getHomeSliders(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/homepage/GetHomePageSlider`);
  }

  getBrands(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/homepage/GetHomePageBrands`);
  }
  getHomePageCategories(): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/homepage/GetHomePageCategories`
    );
  }
  getHomepage(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/homepage/GetHomePageSections`);
  }
  getMenuCategory(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/homepage/GetHomePageCategoriesIncludeInMenu`);
  }
}
