import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseLayoutService {

  constructor(private http :HttpClient) { }
  getTranslation(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/localization/get-translation`);
  }

  getCultures(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/localization/get-cultures`);
  }

  setLanguage(lang: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/localization/set-Language`, {
      culture: lang,
    });
  }

  getResources(cultureId: any) {
    let params = new HttpParams().append('cultureId', cultureId);
    return this.http.get(`${environment.apiUrl}/localization/get-resources`, {
      params: params,
    });
  }
}
