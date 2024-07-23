import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHandler } from '@angular/common/http';
import { HttpEvent } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptor implements HttpInterceptor {
  constructor(
    private router: Router
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let token = localStorage.getItem('token');
    let normalreq = req.clone();
    if (token) {
      const newReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token)});
      return next.handle(newReq);
    } 
    return next.handle(normalreq);
  }
}