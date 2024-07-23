import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  constructor(private http:HttpClient) { }
 // AuthApi
 forgotPassword(data: any): Observable<any> {
  return this.http.post(`${environment.apiUrl}/auth/forget-password`, data);
}

resetPassword(data: any): Observable<any> {
  return this.http.post(`${environment.apiUrl}/auth/reset-password`, data);
}

login(data: any): Observable<any> {
  return this.http.post(`${environment.apiUrl}/auth/login`, data);
}

register(data: any): Observable<any> {
  return this.http.post(`${environment.apiUrl}/auth/register`, data);
}

verifyPhone(user: any, code: any): Observable<any> {
  let params = new HttpParams().append('userId', user).append('code', code);
  return this.http.get(`${environment.apiUrl}/auth/confirm-phone`, {
    params: params,
  });
}

myProfile(): Observable<any> {
  return this.http.get(`${environment.apiUrl}/auth/me`);
}
setShippingCountry(country: any) {
  return this.http.post(
    `${environment.apiUrl}/auth/set-shipping-country/${country}`,
    {}
  );
}
}
