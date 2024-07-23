import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private logedUser = new BehaviorSubject(false);
  loged = this.logedUser.asObservable();

  private userName = new BehaviorSubject('');
  userInfo = this.userName.asObservable();

  private hasCart = new BehaviorSubject(false);
  cart = this.hasCart.asObservable();

  constructor() { }

  isLoged(login: boolean) {
    this.logedUser.next(login);
  }

  user(name: string) {
    this.userName.next(name);
  }

  isCart(cart: boolean) {
    this.hasCart.next(cart);
  }

}
