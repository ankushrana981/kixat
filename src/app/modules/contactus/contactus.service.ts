import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor(private http : HttpClient) { }
  getContact() {
    return this.http.get(`${environment.apiUrl}/contact-page/contact`);
  }

  addContact(data: any) {
    return this.http.post(`${environment.apiUrl}/contact-page/contact`, data);
  }
}
