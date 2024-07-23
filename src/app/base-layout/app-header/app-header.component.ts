import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/app/environments/environment';
import { CartService } from 'src/app/modules/cart/cart.service';
import { HomepageService } from 'src/app/modules/homepage/homepage.service';
import { DataService } from 'src/app/services/data-service.service';
import { UserService } from 'src/app/services/user-service.service';
import { AlertService } from 'src/app/shared/alert/alert.service';
import { SVG_ICONS } from 'src/app/shared/svg-icons';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit {

  icons = SVG_ICONS;
  categories: any;
  isLoading: boolean = false;
  cart: any;
  baseUrl = environment.baseUrl;
  isLogedIn: boolean = false;
  user: any;

  constructor(
    private service: UserService,
    private cartService:CartService,
    private dataService: DataService,
    private homepageService: HomepageService,
    private router: Router,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.isLoged();
  }

  logOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.dataService.isLoged(false);
    this.router.navigateByUrl('/');
    this.alert.message('You are successfully logged out');
  }

  isLoged() {
    let isToken = localStorage.getItem('token');
    if (isToken) this.dataService.isLoged(true);

    let user = localStorage.getItem('user');
    if (user) this.dataService.user(user);
    this.dataService.loged.subscribe((res: any) => this.isLogedIn = res);
    this.dataService.userInfo.subscribe((res: any) => this.user = res);
  }

  getCategories() {
    this.homepageService.getMenuCategory().subscribe(data => {
      this.categories = data;
      console.log('getMenuCategory data', data)
    });
  }


  getCart() {
    this.isLoading = true;
    this.cartService.getCart().subscribe(
      (data) => {
        this.cart = data;
        this.isLoading = false;
        console.log('getCart', data);
      },
      (error) => {
        this.isLoading = false;
        console.log('getCart error', error);
      }
    );
  }

  increaseQuantity(product: any) {
    product.quantity = product.quantity + 1;
    this.updateQuantity(product);
  }

  decreaseQuantity(product: any) {
    if (product.quantity > 1) product.quantity = product.quantity - 1;
    this.updateQuantity(product);
  }

  updateQuantity(product: any) {
    this.isLoading = true;
    let data = { cartItemId: product.id, quantity: product.quantity };
    this.cartService.updateCart(data).subscribe(
      (data) => {
        this.isLoading = false;
        console.log('updateCart', data);
        this.getCart();
      },
      (error) => {
        this.isLoading = false;
        console.log('updateCart error', error);
      }
    );
  }

  removeItem(id: any) {
    this.isLoading = true;
    this.cartService.removeCart(id).subscribe(
      (data) => {
        this.isLoading = false;
        console.log(data, 'data is removed');
        this.getCart();
      },
      (error) => {
        this.isLoading = false;
        console.log('remove item error', error);
      }
    );
  }

}
